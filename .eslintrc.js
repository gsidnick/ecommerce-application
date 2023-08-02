module.exports =
{
  extends: [
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier'
  ],
  overrides: [{
    "files": [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
    "extends": ["plugin:testing-library/react"]
  }],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'testing-library',
    '@typescript-eslint'
  ],
  root: true,
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreEnums: true
      }
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        'default': 'array'
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        'accessibility': 'explicit',
        'overrides': {
          'accessors': 'explicit',
          'constructors': 'off',
          'methods': 'explicit',
          'properties': 'explicit',
          'parameterProperties': 'explicit'
        }
      }
    ],
    'max-lines-per-function': [
      'error',
      {
        'max': 60,
        'skipComments': true,
        'skipBlankLines': true
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    'no-debugger': 'off',
    'no-console': 0,
    'class-methods-use-this': 'off'
  }
}