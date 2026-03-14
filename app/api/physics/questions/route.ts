import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const chapter = searchParams.get("chapter");

  if (!chapter) {
    return NextResponse.json({ questions: [] });
  }

  const filePath = path.join(
    process.cwd(),
    "data",
    "physics",
    `chapter-${chapter}.json`
  );

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ questions: [] });
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return NextResponse.json({
    questions: data.questions || [],
  });
}
