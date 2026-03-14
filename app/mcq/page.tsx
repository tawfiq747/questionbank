import Link from "next/link";
import styles from "./shared.module.css";

const classes = [
  {
    href: "/mcq/class9-10",
    icon: "📘",
    label: "Class 9-10",
    description: "Foundation concepts & SSC preparation",
    subjects: 5,
    questions: "1200+",
  },
  {
    href: "/mcq/class11",
    icon: "📙",
    label: "Class 11",
    description: "Higher secondary foundation & new streams",
    subjects: 4,
    questions: "800+",
  },
  {
    href: "/mcq/class12",
    icon: "📕",
    label: "Class 12",
    description: "Board exam & entrance preparation",
    subjects: 4,
    questions: "900+",
  },
];

export default function MCQClassPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>

        <header className={styles.header}>
          <div className={styles.badge}>MCQ Practice</div>
          <h1 className={styles.title}>
            Select Your <span className={styles.highlight}>Class</span>
          </h1>
          <p className={styles.subtitle}>
            Choose your class to start practicing multiple choice questions
            tailored to your curriculum.
          </p>
        </header>

        <div className={styles.grid}>
          {classes.map((cls) => (
            <Link href={cls.href} key={cls.href} className={styles.card}>
              <div className={styles.cardIcon}>{cls.icon}</div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{cls.label}</h2>
                <p className={styles.cardDesc}>{cls.description}</p>
                <div className={styles.cardStats}>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>{cls.subjects}</span>
                    <span className={styles.statLabel}>Subjects</span>
                  </div>
                  <div className={styles.statDivider} />
                  <div className={styles.stat}>
                    <span className={styles.statValue}>{cls.questions}</span>
                    <span className={styles.statLabel}>Questions</span>
                  </div>
                </div>
              </div>
              <div className={styles.cardArrow}>→</div>
            </Link>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.footerIcon}>💡</div>
          <p className={styles.footerText}>
            All questions are aligned with the latest syllabus and exam
            patterns. Track your progress as you practice.
          </p>
        </div>
      </div>
    </div>
  );
}