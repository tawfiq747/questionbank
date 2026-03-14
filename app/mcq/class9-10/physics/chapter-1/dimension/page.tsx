import { loadQuestions } from "@/lib/parseQuestions";
import QuizClient from "@/app/mcq/components/QuizClient";

const questions = loadQuestions("class9-10/physics-ch1-dimension.txt");

export default function Quiz() {
  return (
    <QuizClient
      topicLabel="মাত্রা ও মাত্রা বিশ্লেষণ"
      chapterLabel="ভৌত রাশি এবং পরিমাপ"
      questions={questions}
      backHref="/mcq/class9-10/physics/chapter-1"
    />
  );
}