import Link from "next/link";
import { subjects, countChapterQuestions, countChapterTopics } from "../data";
import styles from "../../shared.module.css";

const physics = subjects.physics;

export default function PhysicsPage() {
  const chapters = Object.entries(physics.chapters);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        <Link href="/mcq/class9-10" className={styles.backLink}>
          ← Back to Subjects
        </Link>

        <nav className={styles.breadcrumb}>
          <Link href="/mcq">MCQ</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/mcq/class9-10">Class 9-10</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbActive}>Physics</span>
        </nav>

        <header className={styles.header}>
          <div className={styles.badge}>⚛️ Physics</div>
          <h1 className={styles.title}>
            Select a <span className={styles.highlight}>Chapter</span>
          </h1>
          <p className={styles.subtitle}>{physics.description}</p>
        </header>

        <div className={styles.grid}>
          {chapters.map(([slug, chapter], index) => (
            <Link
              href={`/mcq/class9-10/physics/${slug}`}
              key={slug}
              className={styles.card}
            >
              <div className={styles.cardNumber}>{index + 1}</div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{chapter.label}</h2>
                <p className={styles.cardDesc}>{chapter.description}</p>
                <div className={styles.cardStats}>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>
                      {countChapterTopics(chapter)}
                    </span>
                    <span className={styles.statLabel}>Topics</span>
                  </div>
                  <div className={styles.statDivider} />
                  <div className={styles.stat}>
                    <span className={styles.statValue}>
                      {countChapterQuestions(chapter)}
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