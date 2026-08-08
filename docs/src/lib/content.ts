import fs from "node:fs";
import path from "node:path";
import type { Locale } from "./i18n";

export type PatternDoc = {
  title: string;
  slug: string;
  group: string;
  groupLabel: string;
  source: string;
  content: string;
  href: string;
  implementationPath: string;
  testPath: string;
};

const contentRoot = path.join(process.cwd(), "docs", "content");

function parseMarkdown(
  filePath: string,
): Omit<PatternDoc, "href" | "implementationPath" | "testPath"> {
  const raw = fs.readFileSync(filePath, "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n\n([\s\S]*)$/);
  if (!match) throw new Error(`Invalid frontmatter: ${filePath}`);
  const data = Object.fromEntries(
    match[1].split("\n").map((line) => {
      const [key, ...rest] = line.split(":");
      return [key.trim(), rest.join(":").trim().replace(/^"|"$/g, "")];
    }),
  ) as Record<string, string>;
  return {
    title: data.title,
    slug: data.slug,
    group: data.group,
    groupLabel: data.groupLabel,
    source: data.source,
    content: match[2].trim(),
  };
}

export function getPatterns(locale: Locale): PatternDoc[] {
  const localeRoot = path.join(contentRoot, locale, "patterns");
  return fs
    .readdirSync(localeRoot)
    .flatMap((group) => {
      const groupDir = path.join(localeRoot, group);
      return fs
        .readdirSync(groupDir)
        .filter((file) => file.endsWith(".md"))
        .map((file) => {
          const doc = parseMarkdown(path.join(groupDir, file));
          return {
            ...doc,
            href: `/${locale}/patterns/${doc.group}/${doc.slug}`,
            implementationPath: `patterns/${doc.group}/${doc.slug}/index.ts`,
            testPath: `test/${doc.group}/${doc.slug}/index.test.ts`,
          };
        });
    })
    .sort(
      (a, b) =>
        a.group.localeCompare(b.group) || a.title.localeCompare(b.title),
    );
}

export function getPattern(
  locale: Locale,
  group: string,
  slug: string,
): PatternDoc {
  const filePath = path.join(
    contentRoot,
    locale,
    "patterns",
    group,
    `${slug}.md`,
  );
  const doc = parseMarkdown(filePath);
  return {
    ...doc,
    href: `/${locale}/patterns/${group}/${slug}`,
    implementationPath: `patterns/${group}/${slug}/index.ts`,
    testPath: `test/${group}/${slug}/index.test.ts`,
  };
}
