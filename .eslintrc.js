module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // TypeScript parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // Make ESLint play nicely with Prettier
  ],
  rules: {
    // Override/add rules settings
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    '@typescript-eslint/explicit-module-boundary-types': 'off', // optional
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off', // Not needed with TypeScript
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
};
