import Link from "next/link";
import { subjects } from "../../data";
import styles from "../../../shared.module.css";

const chapter = subjects.physics.chapters["chapter-1"];

export default function Chapter1Page() {
  const topics = Object.entries(chapter.topics);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        <Link href="/mcq/class9-10/physics" className={styles.backLink}>
          ← Back to Chapters
        </Link>

        <nav className={styles.breadcrumb}>
          <Link href="/mcq">MCQ</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/mcq/class9-10">Class 9-10</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/mcq/class9-10/physics">Physics</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbActive}>{chapter.label}</span>
        </nav>

        <header className={styles.header}>
          <div className={styles.badge}>{chapter.label}</div>
          <h1 className={styles.title}>
            Pick a <span className={styles.highlight}>Topic</span>
          </h1>
          <p className={styles.subtitle}>{chapter.description}</p>
        </header>

        <div className={styles.grid}>
          {topics.map(([slug, topic], index) => (
            <Link
              href={`/mcq/class9-10/physics/chapter-1/${slug}`}
              key={slug}
              className={styles.card}
            >
              <div className={styles.cardNumber}>{index + 1}</div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{topic.label}</h2>
                <p className={styles.cardDesc}>{topic.description}</p>
                <div className={styles.cardStats}>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>
                      {topic.questions.length}
                    </span>
                    <span className={styles.statLabel}>Questions</span>
                  </div>
                </div>
              </div>
              <div className={styles.cardArrow}>→</div>
            </Link>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.footerIcon}>🎯</div>
          <p className={styles.footerText}>
            Each topic has focused questions. Read explanations carefully!
          </p>
        </div>
      </div>
    </div>
  );
}