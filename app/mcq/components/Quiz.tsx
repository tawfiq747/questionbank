"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./exam.module.css";

type QuestionLevel = "easy" | "medium" | "hard";

interface Question {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  uddipok?: string;
  level?: QuestionLevel;
}

interface Props {
  title: string;
  subtitle?: string;
  questions: Question[];
  duration?: number;
  enableNegative?: boolean;
  negativeMark?: number;
  backHref: string;
}

export default function Quiz({
  title,
  subtitle,
  questions,
  duration = 3600,
  enableNegative = false,
  negativeMark = 0.25,
  backHref,
}: Props) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<(number | undefined)[]>(
    Array(questions.length).fill(undefined)
  );
  const [showConfirm, setShowConfirm] = useState(false);

  // Shuffle groups (keep uddipok questions together)
  const shuffled = useMemo(() => {
    const groups: Question[][] = [];
    let currentGroup: Question[] = [];
    let lastUddipok: string | undefined = undefined;

    for (const q of questions) {
      if (q.uddipok !== lastUddipok) {
        if (currentGroup.length > 0) groups.push(currentGroup);
        currentGroup = [q];
        lastUddipok = q.uddipok;
      } else {
        currentGroup.push(q);
      }
    }
    if (currentGroup.length > 0) groups.push(currentGroup);

    return [...groups].sort(() => Math.random() - 0.5).flat();
  }, [questions]);

  // Timer
  useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted]);

  const handleSelect = (qIndex: number, value: number) => {
    if (submitted) return;
    setAnswers((prev) => {
      const updated = [...prev];
      updated[qIndex] = updated[qIndex] === value ? undefined : value;
      return updated;
    });
  };

  const calculateScore = () => {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    shuffled.forEach((q, i) => {
      if (answers[i] === undefined) unanswered++;
      else if (answers[i] === q.answer) correct++;
      else wrong++;
    });

    let finalScore = correct;
    if (enableNegative) {
      finalScore = correct - wrong * negativeMark;
      if (finalScore < 0) finalScore = 0;
    }

    return { correct, wrong, unanswered, finalScore };
  };

  const formatTime = () => {
    const h = Math.floor(timeLeft / 3600);
    const m = Math.floor((timeLeft % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (timeLeft % 60).toString().padStart(2, "0");
    return h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`;
  };

  const answered = answers.filter((a) => a !== undefined).length;
  const total = shuffled.length;
  const result = calculateScore();
  const percentage = Math.round((result.finalScore / total) * 100);
  const isUrgent = timeLeft <= 300;

  const shouldShowUddipok = (index: number): boolean => {
    const q = shuffled[index];
    if (!q.uddipok) return false;
    if (index === 0) return true;
    return shuffled[index - 1].uddipok !== q.uddipok;
  };

  // Level stats
  const levelStats = useMemo(() => {
    const stats = { easy: 0, medium: 0, hard: 0 };
    shuffled.forEach((q) => {
      if (q.level) stats[q.level]++;
    });
    return stats;
  }, [shuffled]);

  // ─── RESULT SCREEN ───
  if (submitted) {
    let emoji = "🎯";
    let message = "Keep practicing!";
    let color = "#f59e0b";

    if (percentage >= 80) {
      emoji = "🏆";
      message = "Excellent!";
      color = "#10b981";
    } else if (percentage >= 50) {
      emoji = "👍";
      message = "Good job!";
      color = "#3b82f6";
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.resultPage}>
          <div className={styles.resultEmoji}>{emoji}</div>
          <h1 className={styles.resultTitle}>{message}</h1>
          <p className={styles.resultSubtitle}>{title}</p>

          <div
            className={styles.scoreCircle}
            style={
              { "--pct": percentage, "--clr": color } as React.CSSProperties
            }
          >
            <span className={styles.scoreNumber}>{percentage}%</span>
            <span className={styles.scoreLabel}>
              {result.finalScore}/{total}
            </span>
          </div>

          <div className={styles.resultStats}>
            <div className={`${styles.resultStat} ${styles.statCorrect}`}>
              <span className={styles.resultStatValue}>{result.correct}</span>
              <span className={styles.resultStatLabel}>Correct</span>
            </div>
            <div className={`${styles.resultStat} ${styles.statWrong}`}>
              <span className={styles.resultStatValue}>{result.wrong}</span>
              <span className={styles.resultStatLabel}>Wrong</span>
            </div>
            <div className={`${styles.resultStat} ${styles.statSkip}`}>
              <span className={styles.resultStatValue}>
                {result.unanswered}
              </span>
              <span className={styles.resultStatLabel}>Skipped</span>
            </div>
          </div>

          {enableNegative && (
            <p className={styles.negativeNote}>
              Negative marking: −{negativeMark} per wrong answer
            </p>
          )}

          {/* Review */}
          <div className={styles.reviewSection}>
            <h3 className={styles.reviewTitle}>📋 Answer Review</h3>
            {shuffled.map((q, i) => {
              const userAns = answers[i];
              const isCorrect = userAns === q.answer;
              const isSkipped = userAns === undefined;

              return (
                <div key={i}>
                  {shouldShowUddipok(i) && (
                    <div className={styles.reviewUddipok}>
                      <span className={styles.uddipokTag}>📖 উদ্দীপক</span>
                      <p className={styles.uddipokText}>{q.uddipok}</p>
                    </div>
                  )}

                  <div
                    className={`${styles.reviewCard} ${
                      isSkipped
                        ? styles.reviewSkipped
                        : isCorrect
                        ? styles.reviewCorrect
                        : styles.reviewWrong
                    }`}
                  >
                    <div className={styles.reviewHeader}>
                      <div className={styles.reviewHeaderLeft}>
                        <span className={styles.reviewNum}>{i + 1}</span>
                        {q.level && (
                          <span
                            className={`${styles.levelBadge} ${
                              styles[`level_${q.level}`]
                            }`}
                          >
                            {q.level}
                          </span>
                        )}
                      </div>
                      <span className={styles.reviewStatus}>
                        {isSkipped
                          ? "Skipped"
                          : isCorrect
                          ? "✓ Correct"
                          : "✗ Wrong"}
                      </span>
                    </div>
                    <p className={styles.reviewQuestion}>{q.question}</p>
                    <div className={styles.reviewOptions}>
                      {q.options.map((opt, j) => (
                        <div
                          key={j}
                          className={`${styles.reviewOption} ${
                            j === q.answer ? styles.reviewOptCorrect : ""
                          } ${
                            userAns === j && j !== q.answer
                              ? styles.reviewOptWrong
                              : ""
                          }`}
                        >
                          <span className={styles.reviewOptLetter}>
                            {String.fromCharCode(65 + j)}
                          </span>
                          {opt}
                          {j === q.answer && (
                            <span className={styles.reviewOptTag}>✓</span>
                          )}
                          {userAns === j && j !== q.answer && (
                            <span className={styles.reviewOptTag}>
                              Your answer
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    {q.explanation && (
                      <div className={styles.reviewExplanation}>
                        💡 {q.explanation}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.resultActions}>
            <button
              onClick={() => {
                setSubmitted(false);
                setAnswers(Array(total).fill(undefined));
                setTimeLeft(duration);
              }}
              className={styles.btnPrimary}
            >
              🔄 Retake Exam
            </button>
            <Link href={backHref} className={styles.btnSecondary}>
              ← Back to Topics
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── EXAM SCREEN ───
  return (
    <div className={styles.wrapper}>
      {/* Confirm Modal */}
      {showConfirm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3 className={styles.modalTitle}>Submit Exam?</h3>
            <p className={styles.modalText}>
              Answered <strong>{answered}</strong> out of{" "}
              <strong>{total}</strong>.
              {total - answered > 0 && (
                <span className={styles.modalWarning}>
                  {" "}
                  {total - answered} still unanswered!
                </span>
              )}
            </p>
            <div className={styles.modalActions}>
              <button
                onClick={() => {
                  setShowConfirm(false);
                  setSubmitted(true);
                }}
                className={styles.btnPrimary}
              >
                Yes, Submit
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className={styles.btnSecondary}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={styles.examContainer}>
        {/* Sticky Header */}
        <div className={styles.stickyHeader}>
          <div className={styles.headerLeft}>
            <Link href={backHref} className={styles.exitBtn}>
              ✕
            </Link>
            <div className={styles.headerInfo}>
              <span className={styles.headerTitle}>{title}</span>
              {subtitle && (
                <span className={styles.headerSub}>{subtitle}</span>
              )}
            </div>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.answeredBadge}>
              {answered}/{total}
            </div>
            <div
              className={`${styles.timerBadge} ${
                isUrgent ? styles.timerUrgent : ""
              }`}
            >
              ⏳ {formatTime()}
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${(answered / total) * 100}%` }}
          />
        </div>

        {/* Exam Info Bar */}
        <div className={styles.examInfoBar}>
          <div className={styles.examInfoItem}>
            📝 <strong>{total}</strong> Questions
          </div>
          {levelStats.easy > 0 && (
            <div className={`${styles.examInfoItem} ${styles.infoEasy}`}>
              🟢 {levelStats.easy} Easy
            </div>
          )}
          {levelStats.medium > 0 && (
            <div className={`${styles.examInfoItem} ${styles.infoMedium}`}>
              🟡 {levelStats.medium} Medium
            </div>
          )}
          {levelStats.hard > 0 && (
            <div className={`${styles.examInfoItem} ${styles.infoHard}`}>
              🔴 {levelStats.hard} Hard
            </div>
          )}
        </div>

        {/* Navigator */}
        <div className={styles.navigator}>
          {shuffled.map((q, i) => (
            <a
              href={`#q${i}`}
              key={i}
              className={`${styles.navDot} ${
                answers[i] !== undefined ? styles.navDotAnswered : ""
              } ${q.level ? styles[`navDot_${q.level}`] : ""}`}
            >
              {i + 1}
            </a>
          ))}
        </div>

        {/* Questions */}
        <div className={styles.questionsContainer}>
          {shuffled.map((q, i) => (
            <div key={i}>
              {/* UDDIPOK */}
              {shouldShowUddipok(i) && (
                <div className={styles.uddipokBox} id={`q${i}`}>
                  <div className={styles.uddipokHeader}>
                    <span className={styles.uddipokTag}>📖 উদ্দীপক</span>
                  </div>
                  <p className={styles.uddipokContent}>{q.uddipok}</p>
                </div>
              )}

              {/* Question */}
              <div
                className={styles.questionBlock}
                id={q.uddipok ? undefined : `q${i}`}
              >
                <div className={styles.questionHead}>
                  <div className={styles.questionHeadLeft}>
                    <span className={styles.qNum}>Q{i + 1}</span>
                    {q.level && (
                      <span
                        className={`${styles.levelBadge} ${
                          styles[`level_${q.level}`]
                        }`}
                      >
                        {q.level === "easy"
                          ? "🟢 Easy"
                          : q.level === "medium"
                          ? "🟡 Medium"
                          : "🔴 Hard"}
                      </span>
                    )}
                    {q.uddipok && (
                      <span className={styles.qUddipokTag}>
                        উদ্দীপক ভিত্তিক
                      </span>
                    )}
                  </div>
                  {answers[i] !== undefined && (
                    <span className={styles.qAnswered}>Answered</span>
                  )}
                </div>

                {/* ★ Multi-line question text */}
                <div className={styles.qText}>
                  {q.question.split("\n").map((line, idx) => (
                    <span key={idx} className={styles.qLine}>
                      {line}
                    </span>
                  ))}
                </div>

                <div className={styles.optionsGrid}>
                  {q.options.map((opt, j) => (
                    <button
                      key={j}
                      className={`${styles.optionBtn} ${
                        answers[i] === j ? styles.optionSelected : ""
                      }`}
                      onClick={() => handleSelect(i, j)}
                    >
                      <span className={styles.optLetter}>
                        {String.fromCharCode(65 + j)}
                      </span>
                      <span className={styles.optText}>{opt}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit */}
        <div className={styles.submitSection}>
          {enableNegative && (
            <p className={styles.negativeWarning}>
              ⚠️ Negative marking: −{negativeMark} per wrong answer
            </p>
          )}
          <button
            onClick={() => setShowConfirm(true)}
            className={styles.btnSubmit}
          >
            📝 Submit Exam ({answered}/{total} answered)
          </button>
        </div>
      </div>
    </div>
  );
}