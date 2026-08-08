export type Locale = "en" | "vi" | "zh";

export const locales: Locale[] = ["en", "vi", "zh"];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  vi: "Ti\u1ebfng Vi\u1ec7t",
  zh: "\u4e2d\u6587",
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
    lightTheme: "Light",
    darkTheme: "Dark",
    language: "Language",
    heroTitle: "Design patterns, implemented cleanly.",
    heroBody:
      "Explore all 23 GoF patterns with TypeScript implementations, tests, and concise engineering notes.",
  },
  vi: {
    tagline:
      "Tri\u1ec3n khai TypeScript th\u1ef1c t\u1ebf cho 23 m\u1eabu thi\u1ebft k\u1ebf Gang of Four.",
    searchPlaceholder: "T\u00ecm m\u1eabu thi\u1ebft k\u1ebf...",
    patterns: "M\u1eabu thi\u1ebft k\u1ebf",
    source: "Ngu\u1ed3n",
    implementation: "Tri\u1ec3n khai",
    tests: "Ki\u1ec3m th\u1eed",
    openPattern: "M\u1edf m\u1eabu",
    theme: "Giao di\u1ec7n",
    lightTheme: "S\u00e1ng",
    darkTheme: "T\u1ed1i",
    language: "Ng\u00f4n ng\u1eef",
    heroTitle:
      "M\u1eabu thi\u1ebft k\u1ebf, tri\u1ec3n khai r\u00f5 r\u00e0ng.",
    heroBody:
      "Kh\u00e1m ph\u00e1 23 GoF patterns v\u1edbi TypeScript implementation, test v\u00e0 ghi ch\u00fa k\u1ef9 thu\u1eadt ng\u1eafn g\u1ecdn.",
  },
  zh: {
    tagline:
      "\u9762\u5411\u5de5\u7a0b\u5b9e\u8df5\u7684 23 \u4e2a Gang of Four \u8bbe\u8ba1\u6a21\u5f0f TypeScript \u5b9e\u73b0\u3002",
    searchPlaceholder: "\u641c\u7d22\u8bbe\u8ba1\u6a21\u5f0f...",
    patterns: "\u8bbe\u8ba1\u6a21\u5f0f",
    source: "\u6765\u6e90",
    implementation: "\u5b9e\u73b0",
    tests: "\u6d4b\u8bd5",
    openPattern: "\u6253\u5f00\u6a21\u5f0f",
    theme: "\u4e3b\u9898",
    lightTheme: "\u6d45\u8272",
    darkTheme: "\u6df1\u8272",
    language: "\u8bed\u8a00",
    heroTitle: "\u6e05\u6670\u5b9e\u73b0\u8bbe\u8ba1\u6a21\u5f0f\u3002",
    heroBody:
      "\u6d4f\u89c8\u5168\u90e8 23 \u4e2a GoF \u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5305\u62ec TypeScript \u5b9e\u73b0\u3001\u6d4b\u8bd5\u548c\u7b80\u6d01\u5de5\u7a0b\u8bf4\u660e\u3002",
  },
} as const;

export function normalizeLocale(value: string | undefined): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : "en";
}
