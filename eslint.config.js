import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // 🧱 Industry safety rules
      'no-console': 'error',
      '@typescript-eslint/no-explicit-any': 'error',

      // 🧠 Code quality
      '@typescript-eslint/no-unused-vars': ['error'],
      'eqeqeq': ['error', 'always'],

      // ⚛️ React correctness
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
])
