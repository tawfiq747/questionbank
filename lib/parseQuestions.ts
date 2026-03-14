import fs from "fs";
import path from "path";

export type QuestionLevel = "easy" | "medium" | "hard";

export interface Question {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  uddipok?: string;
  level?: QuestionLevel;
}

export function loadQuestions(filePath: string): Question[] {
  const fullPath = path.join(process.cwd(), "questions", filePath);
  const content = fs.readFileSync(fullPath, "utf-8");
  return parseQuestionText(content);
}

export function parseQuestionText(text: string): Question[] {
  const questions: Question[] = [];
  const lines = text.split("\n");

  let currentUddipok: string | undefined = undefined;
  let inUddipok = false;
  let uddipokLines: string[] = [];

  let questionLines: string[] = [];
  let options: string[] = [];
  let answerLetter = "";
  let explanation = "";
  let currentLevel: QuestionLevel | undefined = undefined;
  let pendingLevel: QuestionLevel | undefined = undefined;
  let inQuestion = false;

  function isTag(line: string): boolean {
    return (
      line.startsWith("Q:") ||
      line.startsWith("A:") ||
      line.startsWith("B:") ||
      line.startsWith("C:") ||
      line.startsWith("D:") ||
      line.startsWith("ANS:") ||
      line.startsWith("EXP:") ||
      line.startsWith("UDDIPOK:") ||
      line.startsWith("LEVEL:") ||
      line === "---"
    );
  }

  function saveQuestion() {
    const questionText = questionLines.join("\n").trim();
    if (!questionText) return;

    const answerIndex = answerLetter.toUpperCase().charCodeAt(0) - 65;

    if (questionText && options.length >= 2) {
      questions.push({
        question: questionText,
        options: [...options],
        answer: answerIndex >= 0 && answerIndex <= 3 ? answerIndex : 0,
        explanation,
        ...(currentUddipok ? { uddipok: currentUddipok } : {}),
        ...(currentLevel ? { level: currentLevel } : {}),
      });
    }

    questionLines = [];
    options = [];
    answerLetter = "";
    explanation = "";
    inQuestion = false;
    currentLevel = undefined;
  }

  function saveUddipok() {
    if (uddipokLines.length > 0) {
      currentUddipok = uddipokLines.join("\n").trim();
      uddipokLines = [];
    }
    inUddipok = false;
  }

  function parseLevel(value: string): QuestionLevel | undefined {
    const v = value.trim().toLowerCase();
    if (v === "easy" || v === "medium" || v === "hard") return v;
    return undefined;
  }

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    if (trimmed === "---") {
      if (inUddipok) saveUddipok();
      if (inQuestion) inQuestion = false;
      saveQuestion();
      currentUddipok = undefined;
      pendingLevel = undefined;
      continue;
    }

    if (trimmed.startsWith("LEVEL:")) {
      if (inQuestion) {
        inQuestion = false;
        saveQuestion();
      }
      pendingLevel = parseLevel(trimmed.replace(/^LEVEL:\s*/, ""));
      continue;
    }

    if (trimmed.startsWith("UDDIPOK:")) {
      if (inUddipok) saveUddipok();
      if (inQuestion) {
        inQuestion = false;
        saveQuestion();
      }
      currentUddipok = undefined;
      uddipokLines = [trimmed.replace(/^UDDIPOK:\s*/, "")];
      inUddipok = true;
      continue;
    }

    if (inUddipok) {
      if (isTag(trimmed)) {
        saveUddipok();
      } else {
        if (trimmed.length > 0) uddipokLines.push(trimmed);
        continue;
      }
    }

    if (trimmed.startsWith("Q:")) {
      saveQuestion();
      questionLines = [trimmed.replace(/^Q:\s*/, "")];
      inQuestion = true;
      currentLevel = pendingLevel;
      pendingLevel = undefined;
      continue;
    }

    if (trimmed.startsWith("A:")) {
      inQuestion = false;
      options[0] = trimmed.replace(/^A:\s*/, "");
      continue;
    }
    if (trimmed.startsWith("B:")) {
      options[1] = trimmed.replace(/^B:\s*/, "");
      continue;
    }
    if (trimmed.startsWith("C:")) {
      options[2] = trimmed.replace(/^C:\s*/, "");
      continue;
    }
    if (trimmed.startsWith("D:")) {
      options[3] = trimmed.replace(/^D:\s*/, "");
      continue;
    }

    if (trimmed.startsWith("ANS:")) {
      answerLetter = trimmed.replace(/^ANS:\s*/, "").trim();
      continue;
    }

    if (trimmed.startsWith("EXP:")) {
      explanation = trimmed.replace(/^EXP:\s*/, "");
      continue;
    }

    if (inQuestion && trimmed.length > 0) {
      questionLines.push(trimmed);
      continue;
    }
  }

  if (inUddipok) saveUddipok();
  saveQuestion();

  return questions;
}