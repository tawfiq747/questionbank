import Link from "next/link";

export default function PhysicsChapterPage() {
  const chapters = [
    { id: 1, title: "ভৌত রাশি ও পরিমাপ" },
    { id: 2, title: "গতি" },
    { id: 3, title: "বল" },
    { id: 4, title: "কাজ, শক্তি ও ক্ষমতা" },
    { id: 5, title: "পদার্থের অবস্থা" },
    { id: 6, title: "তাপ" },
    { id: 7, title: "তরঙ্গ" },
  ];

  return (
    <div className="chapter-page">
      <p className="subtitle">Chapter অনুযায়ী প্রশ্ন অনুশীলন করো</p>

      {/* Chapter List */}
      <div className="chapter-list">
        {chapters.map((ch) => (
          <Link
            key={ch.id}
            href={`/questionbank/physics/${ch.id}`}
            className="chapter-item"
          >
            <span className="chapter-title">
              {ch.id}. {ch.title}
            </span>
            <span className="chapter-arrow">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
