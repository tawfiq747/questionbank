"use client";

import { useEffect, useState, use } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

export default function ChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = use(params);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [showAnswer, setShowAnswer] = useState<Record<number, boolean>>({});
  const [selected, setSelected] = useState<Record<number, string>>({});

  useEffect(() => {
    fetch(`/api/physics/questions?chapter=${chapter}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.questions || data.data || []);
      });
  }, [chapter]);

  return (
    <div className="container">
      <h2>Physics – Chapter {chapter}</h2>

      {questions.length === 0 && <p>⏳ Loading questions...</p>}

      {questions.map((q, index) => (
        <div key={q.id} className="card q">
          <b>
            {index + 1}. {q.question}
          </b>

          <ul className="options">
            {q.options.map((op) => {
              const isSelected = selected[q.id] === op;
              const isCorrect = op === q.answer;

              let className = "";
              if (isSelected) {
                className = isCorrect ? "correct" : "wrong";
              }

              return (
                <li
                  key={op}
                  className={className}
                  onClick={() =>
                    setSelected((prev) => ({ ...prev, [q.id]: op }))
                  }
                >
                  {op}
                </li>
              );
            })}
          </ul>

          <button
            className="show-btn"
            onClick={() =>
              setShowAnswer((prev) => ({
                ...prev,
                [q.id]: !prev[q.id],
              }))
            }
          >
            {showAnswer[q.id] ? "Hide Answer" : "Show Answer"}
          </button>

          {showAnswer[q.id] && (
            <p className="answer">✅ উত্তর: {q.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
