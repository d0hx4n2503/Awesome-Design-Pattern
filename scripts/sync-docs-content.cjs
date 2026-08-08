const fs = require("node:fs");
const path = require("node:path");

const labels = {
  creational: {
    en: "Creational",
    vi: "Kh\u1edfi t\u1ea1o",
    zh: "\u521b\u5efa\u578b",
  },
  structural: {
    en: "Structural",
    vi: "C\u1ea5u tr\u00fac",
    zh: "\u7ed3\u6784\u578b",
  },
  behavioral: {
    en: "Behavioral",
    vi: "H\u00e0nh vi",
    zh: "\u884c\u4e3a\u578b",
  },
};

const localizedIntro = {
  vi: "T\u00e0i li\u1ec7u ti\u1ebfng Vi\u1ec7t n\u00e0y \u0111\u01b0\u1ee3c \u0111\u1ed3ng b\u1ed9 t\u1eeb README g\u1ed1c v\u00e0 gi\u1eef c\u00e1c thu\u1eadt ng\u1eef k\u1ef9 thu\u1eadt quan tr\u1ecdng \u0111\u1ec3 d\u1ec5 \u0111\u1ed1i chi\u1ebfu v\u1edbi code TypeScript.",
  zh: "\u672c\u4e2d\u6587\u6587\u6863\u4e0e\u6e90 README \u4fdd\u6301\u540c\u6b65\uff0c\u5e76\u4fdd\u7559\u5173\u952e\u6280\u672f\u672f\u8bed\uff0c\u65b9\u4fbf\u4e0e TypeScript \u5b9e\u73b0\u5bf9\u7167\u9605\u8bfb\u3002",
};

const headings = {
  vi: {
    Intent: "M\u1ee5c \u0111\u00edch",
    Problem: "V\u1ea5n \u0111\u1ec1",
    Solution: "Gi\u1ea3i ph\u00e1p",
    "Core Idea": "\u00dd t\u01b0\u1edfng c\u1ed1t l\u00f5i",
    "TypeScript Implementation": "Tri\u1ec3n khai TypeScript",
    "When To Use": "Khi n\u00ean d\u00f9ng",
    "When Not To Use": "Khi kh\u00f4ng n\u00ean d\u00f9ng",
    "Recognition Signs": "D\u1ea5u hi\u1ec7u nh\u1eadn bi\u1ebft",
    Benefits: "L\u1ee3i \u00edch",
    Advantages: "\u01afu \u0111i\u1ec3m",
    "Trade-offs": "\u0110\u00e1nh \u0111\u1ed5i",
    "Trade-Offs": "\u0110\u00e1nh \u0111\u1ed5i",
    "Related Patterns": "Pattern li\u00ean quan",
    "Practical Perspective": "G\u00f3c nh\u00ecn th\u1ef1c t\u1ebf",
    "Real-World Use Cases":
      "T\u00ecnh hu\u1ed1ng \u00e1p d\u1ee5ng th\u1ef1c t\u1ebf",
    "Decision Questions": "C\u00e2u h\u1ecfi ra quy\u1ebft \u0111\u1ecbnh",
    "Design Checklist": "Checklist thi\u1ebft k\u1ebf",
    "Common Mistakes": "L\u1ed7i th\u01b0\u1eddng g\u1eb7p",
    "Testing Guidance": "H\u01b0\u1edbng d\u1eabn ki\u1ec3m th\u1eed",
    "Refactoring Signals": "D\u1ea5u hi\u1ec7u refactor",
  },
  zh: {
    Intent: "\u610f\u56fe",
    Problem: "\u95ee\u9898",
    Solution: "\u89e3\u51b3\u65b9\u6848",
    "Core Idea": "\u6838\u5fc3\u601d\u60f3",
    "TypeScript Implementation": "TypeScript \u5b9e\u73b0",
    "When To Use": "\u9002\u7528\u573a\u666f",
    "When Not To Use": "\u4e0d\u9002\u7528\u573a\u666f",
    "Recognition Signs": "\u8bc6\u522b\u4fe1\u53f7",
    Benefits: "\u4f18\u70b9",
    Advantages: "\u4f18\u70b9",
    "Trade-offs": "\u6743\u8861",
    "Trade-Offs": "\u6743\u8861",
    "Related Patterns": "\u76f8\u5173\u6a21\u5f0f",
    "Practical Perspective": "\u5b9e\u6218\u89c6\u89d2",
    "Real-World Use Cases": "\u771f\u5b9e\u573a\u666f",
    "Decision Questions": "\u51b3\u7b56\u95ee\u9898",
    "Design Checklist": "\u8bbe\u8ba1\u68c0\u67e5\u6e05\u5355",
    "Common Mistakes": "\u5e38\u89c1\u9519\u8bef",
    "Testing Guidance": "\u6d4b\u8bd5\u6307\u5357",
    "Refactoring Signals": "\u91cd\u6784\u4fe1\u53f7",
  },
};

function localizeMarkdown(body, locale) {
  if (locale === "en") return body;

  const lines = body.split(/\r?\n/);
  const title = lines[0] || "# Pattern";
  const rest = lines
    .slice(1)
    .join("\n")
    .replace(/^##\s+(.+)$/gm, (match, heading) => {
      const translated = headings[locale][heading.trim()];
      return translated ? "## " + translated : match;
    })
    .trim();

  return title + "\n\n> " + localizedIntro[locale] + "\n\n" + rest + "\n";
}

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
      const outPath = path.join(outDir, slug + ".md");
      const frontmatter =
        "---\n" +
        'title: "' +
        title +
        '"\n' +
        'slug: "' +
        slug +
        '"\n' +
        'group: "' +
        group +
        '"\n' +
        'groupLabel: "' +
        labels[group][locale] +
        '"\n' +
        'source: "patterns/' +
        group +
        "/" +
        slug +
        '/README.md"\n' +
        "---\n\n";
      fs.writeFileSync(
        outPath,
        frontmatter + localizeMarkdown(body, locale).trim() + "\n",
        "utf8",
      );
    }
  }
}
