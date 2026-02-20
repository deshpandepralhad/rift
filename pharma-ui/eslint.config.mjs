import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extends the standard Next.js configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Explicitly ignore folders that shouldn't be linted
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**"
    ],
  }
];

export default eslintConfig;