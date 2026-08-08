export type Locale = "en" | "vi" | "zh";

export const locales: Locale[] = ["en", "vi", "zh"];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  vi: "Tiếng Việt",
  zh: "中文",
};

export const ui = {
  en: {
    tagline:
      "Production-minded TypeScript implementations of the 23 Gang of Four design patterns.",
    searchPlaceholder: "Search patterns...",
    patterns: "Patterns",
    source: "Source",
    implementation: "Implementation",
    tests: "Tests",
    openPattern: "Open pattern",
    theme: "Theme",
    language: "Language",
    heroTitle: "Design patterns, implemented cleanly.",
    heroBody:
      "Explore all 23 GoF patterns with TypeScript implementations, tests, and concise engineering notes.",
  },
  vi: {
    tagline:
      "Triển khai TypeScript thực tế cho 23 Gang of Four design patterns.",
    searchPlaceholder: "Tìm pattern...",
    patterns: "Patterns",
    source: "Nguồn",
    implementation: "Triển khai",
    tests: "Kiểm thử",
    openPattern: "Mở pattern",
    theme: "Giao diện",
    language: "Ngôn ngữ",
    heroTitle: "Design patterns, triển khai rõ ràng.",
    heroBody:
      "Khám phá 23 GoF patterns với TypeScript implementation, test và ghi chú kỹ thuật ngắn gọn.",
  },
  zh: {
    tagline: "面向工程实践的 23 个 GoF 设计模式 TypeScript 实现。",
    searchPlaceholder: "搜索模式...",
    patterns: "设计模式",
    source: "来源",
    implementation: "实现",
    tests: "测试",
    openPattern: "打开模式",
    theme: "主题",
    language: "语言",
    heroTitle: "清晰实现设计模式。",
    heroBody:
      "浏览全部 23 个 GoF 设计模式，包括 TypeScript 实现、测试和简洁工程说明。",
  },
} as const;

export function normalizeLocale(value: string | undefined): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : "en";
}
