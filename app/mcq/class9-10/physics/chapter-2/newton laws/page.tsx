import QuizClient from "@/app/mcq/components/QuizClient";
import { subjects } from "../../../data";

const chapter = subjects.physics.chapters["chapter-2"];
const topic = chapter.topics["newtons-laws"];

export default function NewtonsLawsQuiz() {
  return (
    <QuizClient
      topicLabel={topic.label}
      chapterLabel={chapter.label}
      questions={topic.questions}
      backHref="/mcq/class9-10/physics/chapter-2"
    />
  );
}