"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./quiz.module.css";

export interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty?: "easy" | "medium" | "hard";
  uddipok?: string;
}

interface QuizProps {
  topicLabel: string;
  chapterLabel: string;
  questions: Question[];
  backHref: string;
}

const levelEmoji: Record<string, string> = {
  easy: "🟢",
  medium: "🟡",
  hard: "🔴",
};

function QuizClient({ topicLabel, chapterLabel, questions, backHref }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const q = questions[current];
  const progress = ((current + (selected !== null ? 1 : 0)) / total) * 100;

  function handleSelect(index: number) {
    if (selected !== null) return;
    setSelected(index);
    if (index === q.correctIndex) setScore((s) => s + 1);
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

  function getDifficultyClass(diff?: string): string {
    if (!diff) return "";
    if (diff === "easy") return styles.level_easy || "";
    if (diff === "medium") return styles.level_medium || "";
    if (diff === "hard") return styles.level_hard || "";
    return "";
  }

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
            style={{ "--pct": percentage, "--clr": color } as React.CSSProperties}
          >
            <span className={styles.scoreNumber}>{percentage}%</span>
            <span className={styles.scoreLabel}>
              {score}/{total} correct
            </span>
          </div>

          <div className={styles.reviewSection}>
            <h3 className={styles.reviewTitle}>📋 Answer Review</h3>
            {questions.map((rq, i) => (
              <div key={i} className={styles.reviewCard}>
                {rq.uddipok &&
                  (i === 0 || questions[i - 1].uddipok !== rq.uddipok) && (
                    <div className={styles.reviewUddipok}>
                      <span className={styles.uddipokTagSmall}>📖 উদ্দীপক</span>
                      <p className={styles.reviewUddipokText}>{rq.uddipok}</p>
                    </div>
                  )}
                <div className={styles.reviewHeader}>
                  <span className={styles.reviewNum}>Q{i + 1}</span>
                  {rq.difficulty && (
                    <span className={`${styles.levelBadge} ${getDifficultyClass(rq.difficulty)}`}>
                      {levelEmoji[rq.difficulty] || ""} {rq.difficulty}
                    </span>
                  )}
                </div>
                <p className={styles.reviewQuestion}>{rq.question}</p>
                <div className={styles.reviewOptions}>
                  {rq.options.map((opt, j) => (
                    <div
                      key={j}
                      className={`${styles.reviewOption} ${
                        j === rq.correctIndex ? styles.reviewOptCorrect : ""
                      }`}
                    >
                      <span className={styles.reviewOptLetter}>
                        {String.fromCharCode(65 + j)}
                      </span>
                      <span>{opt}</span>
                      {j === rq.correctIndex && (
                        <span className={styles.reviewOptTag}>✓</span>
                      )}
                    </div>
                  ))}
                </div>
                {rq.explanation && (
                  <div className={styles.reviewExplanation}>💡 {rq.explanation}</div>
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.quizContainer}>
        <div className={styles.quizHeader}>
          <Link href={backHref} className={styles.exitBtn}>✕</Link>
          <div className={styles.headerInfo}>
            <span className={styles.headerTopic}>{topicLabel}</span>
            <span className={styles.headerChapter}>{chapterLabel}</span>
          </div>
          <span className={styles.qCount}>{current + 1}/{total}</span>
        </div>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>

        {q.uddipok && (
          <div className={styles.uddipokBox}>
            <div className={styles.uddipokHeader}>
              <span className={styles.uddipokTag}>📖 উদ্দীপক</span>
            </div>
            <p className={styles.uddipokContent}>{q.uddipok}</p>
          </div>
        )}

        <div className={`${styles.questionCard} ${q.uddipok ? styles.questionCardConnected : ""}`}>
          <div className={styles.questionMeta}>
            <span className={styles.questionNumber}>Question {current + 1}</span>
            {q.difficulty && (
              <span className={`${styles.levelBadge} ${getDifficultyClass(q.difficulty)}`}>
                {levelEmoji[q.difficulty] || ""} {q.difficulty}
              </span>
            )}
            {q.uddipok && <span className={styles.uddipokLabel}>উদ্দীপক ভিত্তিক</span>}
          </div>
          <div className={styles.questionText}>
            {q.question.split("\n").map((line, idx) => (
              <span key={idx} className={styles.questionLine}>{line}</span>
            ))}
          </div>
        </div>

        <div className={styles.options}>
          {q.options.map((opt, i) => {
            let optClass = styles.option;
            if (selected !== null) {
              if (i === q.correctIndex) optClass += ` ${styles.correct}`;
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
                <span className={styles.optionLetter}>{String.fromCharCode(65 + i)}</span>
                <span className={styles.optionText}>{opt}</span>
                {selected !== null && i === q.correctIndex && (
                  <span className={styles.optionIcon}>✓</span>
                )}
                {selected === i && i !== q.correctIndex && (
                  <span className={styles.optionIcon}>✗</span>
                )}
              </button>
            );
          })}
        </div>

        {selected !== null && q.explanation && (
          <div className={styles.explanation}>
            <strong>💡 Explanation:</strong> {q.explanation}
          </div>
        )}

        {selected !== null && (
          <button onClick={handleNext} className={styles.btnPrimary}>
            {current + 1 >= total ? "See Results" : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizClient;