import Link from "next/link";
import {
  subjects,
  countSubjectChapters,
  countSubjectTopics,
  countTopicQuestions,
} from "./data";
import styles from "../shared.module.css";

export default function Class910Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        <Link href="/mcq" className={styles.backLink}>
          ← Back to Classes
        </Link>

        <nav className={styles.breadcrumb}>
          <Link href="/mcq">MCQ</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbActive}>Class 9-10</span>
        </nav>

        <header className={styles.header}>
          <div className={styles.badge}>📘 Class 9-10</div>
          <h1 className={styles.title}>
            Choose a <span className={styles.highlight}>Subject</span>
          </h1>
          <p className={styles.subtitle}>
            Pick a subject to explore chapters, topics and practice questions.
          </p>
        </header>

        <div className={styles.grid}>
          {Object.entries(subjects).map(([slug, subject]) => (
            <Link
              href={`/mcq/class9-10/${slug}`}
              key={slug}
              className={`${styles.card} ${styles.cardAccent}`}
              style={{ "--accent": subject.color } as React.CSSProperties}
            >
              <div className={styles.cardIcon}>{subject.icon}</div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{subject.label}</h2>
                <p className={styles.cardDesc}>{subject.description}</p>
                <div className={styles.cardStats}>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>
                      {countSubjectChapters(subject)}
                    </span>
                    <span className={styles.statLabel}>Chapters</span>
                  </div>
                  <div className={styles.statDivider} />
                  <div className={styles.stat}>
                    <span className={styles.statValue}>
                      {countSubjectTopics(subject)}
                    </span>
                    <span className={styles.statLabel}>Topics</span>
                  </div>
                  <div className={styles.statDivider} />
                  <div className={styles.stat}>
                    <span className={styles.statValue}>
                      {countTopicQuestions(subject)}
                    </span>
                    <span className={styles.statLabel}>Questions</span>
                  </div>
                </div>
              </div>
              <div className={styles.cardArrow}>→</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}