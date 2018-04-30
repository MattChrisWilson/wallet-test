module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
    // setupFiles: [resolve('config/polyfills.js')],
    testMatch: ['<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'],
    testEnvironment: 'node',
    testURL: 'http://localhost',
    transform: {
      '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    moduleFileExtensions: [
      'js',
      'json',
      'jsx',
      'node',
    ],
};