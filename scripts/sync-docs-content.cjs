const fs = require("node:fs");
const path = require("node:path");

const labels = {
  creational: { en: "Creational", vi: "Khởi tạo", zh: "创建型" },
  structural: { en: "Structural", vi: "Cấu trúc", zh: "结构型" },
  behavioral: { en: "Behavioral", vi: "Hành vi", zh: "行为型" },
};
const localizedIntro = {
  vi: "Tài liệu tiếng Việt cho pattern này được đồng bộ từ nội dung gốc và giữ nguyên thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.",
  zh: "本中文文档与英文原文保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。",
};
const patternRoot = path.join(process.cwd(), "patterns");
for (const group of fs.readdirSync(patternRoot)) {
  const groupDir = path.join(patternRoot, group);
  if (!fs.statSync(groupDir).isDirectory()) continue;
  for (const slug of fs.readdirSync(groupDir)) {
    const readmePath = path.join(groupDir, slug, "README.md");
    if (!fs.existsSync(readmePath)) continue;
    const body = fs.readFileSync(readmePath, "utf8").trim();
    const title = body.split(/\r?\n/)[0].replace(/^#\s+/, "").trim();
    for (const locale of ["en", "vi", "zh"]) {
      const outDir = path.join(
        process.cwd(),
        "docs",
        "content",
        locale,
        "patterns",
        group,
      );
      fs.mkdirSync(outDir, { recursive: true });
      const outPath = path.join(outDir, `${slug}.md`);
      const localizedBody =
        locale === "en"
          ? body
          : `# ${title}\n\n> ${localizedIntro[locale]}\n\n${body.split(/\r?\n/).slice(1).join("\n").trim()}\n`;
      const frontmatter = `---\ntitle: "${title}"\nslug: "${slug}"\ngroup: "${group}"\ngroupLabel: "${labels[group][locale]}"\nsource: "patterns/${group}/${slug}/README.md"\n---\n\n`;
      fs.writeFileSync(
        outPath,
        frontmatter + localizedBody.trim() + "\n",
        "utf8",
      );
    }
  }
}
