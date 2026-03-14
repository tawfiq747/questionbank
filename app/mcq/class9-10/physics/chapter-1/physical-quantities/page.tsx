import { loadQuestions } from "@/lib/parseQuestions";
import QuizClient from "@/app/mcq/components/QuizClient";

const questions = loadQuestions("class9-10/physics-ch1-quantities.txt");

export default function Quiz() {
  return (
    <QuizClient
      topicLabel="ভৌত রাশি ও একক"
      chapterLabel="ভৌত রাশি এবং পরিমাপ"
      questions={questions}
      backHref="/mcq/class9-10/physics/chapter-1"
    />
  );
}