import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const token = cookies().get("admin_token")?.value;

  if (token !== process.env.ADMIN_TOKEN) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const { chapter, questions } = await req.json();

  const filePath = path.join(
    process.cwd(),
    "data",
    "physics",
    `chapter-${chapter}.json`
  );

  let existing = { questions: [] as any[] };

  if (fs.existsSync(filePath)) {
    existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  existing.questions.push(
    ...questions.map((q: any, i: number) => ({
      id: Date.now() + i,
      ...q,
    }))
  );

  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  return NextResponse.json({ success: true });
}
