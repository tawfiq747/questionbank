"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./quiz.module.css";

export type QuestionLevel = "easy" | "medium" | "hard";

export interface Question {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  uddipok?: string;
  level?: QuestionLevel;
}

interface QuizProps {
  topicLabel: string;
  chapterLabel: string;
  questions: Question[];
  backHref: string;
}

export default function QuizClient({
  topicLabel,
  chapterLabel,
  questions,
  backHref,
}: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const q = questions[current];
  const progress = ((current + (selected !== null ? 1 : 0)) / total) * 100;

  const levelEmoji = {
    easy: "🟢",
    medium: "🟡",
    hard: "🔴",
  };

  function handleSelect(index: number) {
    if (selected !== null) return;
    setSelected(index);
    if (index === q.answer) setScore((s) => s + 1);
  }

  function handleNext() {
    if (current + 1 >= total) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  function handleRetry() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  const percentage = Math.round((score / total) * 100);

  // ─── RESULT ───
  if (finished) {
    let emoji = "🎯";
    let message = "Keep practicing!";
    let color = "#f59e0b";

    if (percentage >= 80) {
      emoji = "🏆";
      message = "Excellent work!";
      color = "#10b981";
    } else if (percentage >= 50) {
      emoji = "👍";
      message = "Good job!";
      color = "#3b82f6";
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.resultContainer}>
          <div className={styles.resultEmoji}>{emoji}</div>
          <h1 className={styles.resultTitle}>{message}</h1>
          <p className={styles.resultSubtitle}>
            {topicLabel} — {chapterLabel}
          </p>

          <div
            className={styles.scoreCircle}
            style={
              { "--pct": percentage, "--clr": color } as React.CSSProperties
            }
          >
            <span className={styles.scoreNumber}>{percentage}%</span>
            <span className={styles.scoreLabel}>
              {score}/{total} correct
            </span>
          </div>

          {/* Review all answers */}
          <div className={styles.reviewSection}>
            <h3 className={styles.reviewTitle}>📋 Answer Review</h3>

            {questions.map((rq, i) => (
              <div key={i} className={styles.reviewCard}>
                {/* Uddipok in review */}
                {rq.uddipok &&
                  (i === 0 || questions[i - 1].uddipok !== rq.uddipok) && (
                    <div className={styles.reviewUddipok}>
                      <span className={styles.uddipokTagSmall}>
                        📖 উদ্দীপক
                      </span>
                      <p className={styles.reviewUddipokText}>
                        {rq.uddipok}
                      </p>
                    </div>
                  )}

                <div className={styles.reviewHeader}>
                  <span className={styles.reviewNum}>Q{i + 1}</span>
                  {rq.level && (
                    <span
                      className={`${styles.levelBadge} ${
                        styles[`level_${rq.level}`]
                      }`}
                    >
                      {levelEmoji[rq.level]} {rq.level}
                    </span>
                  )}
                </div>

                <p className={styles.reviewQuestion}>{rq.question}</p>

                <div className={styles.reviewOptions}>
                  {rq.options.map((opt, j) => (
                    <div
                      key={j}
                      className={`${styles.reviewOption} ${
                        j === rq.answer ? styles.reviewOptCorrect : ""
                      }`}
                    >
                      <span className={styles.reviewOptLetter}>
                        {String.fromCharCode(65 + j)}
                      </span>
                      <span>{opt}</span>
                      {j === rq.answer && (
                        <span className={styles.reviewOptTag}>✓</span>
                      )}
                    </div>
                  ))}
                </div>

                {rq.explanation && (
                  <div className={styles.reviewExplanation}>
                    💡 {rq.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.resultActions}>
            <button onClick={handleRetry} className={styles.btnPrimary}>
              🔄 Try Again
            </button>
            <Link href={backHref} className={styles.btnSecondary}>
              ← Back to Topics
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── QUIZ ───
  return (
    <div className={styles.wrapper}>
      <div className={styles.quizContainer}>
        {/* Header */}
        <div className={styles.quizHeader}>
          <Link href={backHref} className={styles.exitBtn}>
            ✕
          </Link>
          <div className={styles.headerInfo}>
            <span className={styles.headerTopic}>{topicLabel}</span>
            <span className={styles.headerChapter}>{chapterLabel}</span>
          </div>
          <span className={styles.qCount}>
            {current + 1}/{total}
          </span>
        </div>

        {/* Progress */}
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* ★ UDDIPOK */}
        {q.uddipok && (
          <div className={styles.uddipokBox}>
            <div className={styles.uddipokHeader}>
              <span className={styles.uddipokTag}>📖 উদ্দীপক</span>
            </div>
            <p className={styles.uddipokContent}>{q.uddipok}</p>
          </div>
        )}

        {/* Question */}
        <div
          className={`${styles.questionCard} ${
            q.uddipok ? styles.questionCardConnected : ""
          }`}
        >
          <div className={styles.questionMeta}>
            <span className={styles.questionNumber}>
              Question {current + 1}
            </span>

            {/* ★ Level badge */}
            {q.level && (
              <span
                className={`${styles.levelBadge} ${
                  styles[`level_${q.level}`]
                }`}
              >
                {levelEmoji[q.level]} {q.level}
              </span>
            )}

            {q.uddipok && (
              <span className={styles.uddipokLabel}>উদ্দীপক ভিত্তিক</span>
            )}
          </div>

          {/* ★ Multi-line question */}
          <div className={styles.questionText}>
            {q.question.split("\n").map((line, idx) => (
              <span key={idx} className={styles.questionLine}>
                {line}
              </span>
            ))}
          </div>
        </div>

        {/* Options */}
        <div className={styles.options}>
          {q.options.map((opt, i) => {
            let optClass = styles.option;
            if (selected !== null) {
              if (i === q.answer) optClass += ` ${styles.correct}`;
              else if (i === selected) optClass += ` ${styles.wrong}`;
              else optClass += ` ${styles.dimmed}`;
            }

            return (
              <button
                key={i}
                className={optClass}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
              >
                <span className={styles.optionLetter}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className={styles.optionText}>{opt}</span>
                {selected !== null && i === q.answer && (
                  <span className={styles.optionIcon}>✓</span>
                )}
                {selected === i && i !== q.answer && (
                  <span className={styles.optionIcon}>✗</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {selected !== null && q.explanation && (
          <div className={styles.explanation}>
            <strong>💡 Explanation:</strong> {q.explanation}
          </div>
        )}

        {/* Next */}
        {selected !== null && (
          <button onClick={handleNext} className={styles.btnPrimary}>
            {current + 1 >= total ? "See Results" : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}