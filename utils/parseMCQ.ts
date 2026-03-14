export function parseMCQ(text: string) {
  const blocks = text.split(/\n\s*\n/);
  let id = Date.now();

  return blocks.map((block) => {
    const lines = block.split("\n").map((l) => l.trim());

    const question = lines[0].replace(/^\d+\.\s*/, "");

    const options = lines
      .filter((l) => /^[কখগঘ]\)/.test(l))
      .map((l) => l.replace(/^[কখগঘ]\)\s*/, ""));

    const ansLine = lines.find((l) => l.includes("উত্তর"));
    const key = ansLine?.split(":")[1].trim();

    const map: any = { ক: 0, খ: 1, গ: 2, ঘ: 3 };

    return {
      id: id++,
      question,
      options,
      answer: options[map[key]],
    };
  });
}
