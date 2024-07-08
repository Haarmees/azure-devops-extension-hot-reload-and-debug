import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import esLintPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    esLintPrettierRecommended,
    {
        ignores: ["webpack.config.js"]
    }
);