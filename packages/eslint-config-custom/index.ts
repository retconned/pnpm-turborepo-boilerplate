/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['next/core-web-vitals', 'turbo', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off'
  },
  ignorePatterns: ['node_modules', 'dist'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')]
    }
  }
}
