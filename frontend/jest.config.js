module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress/',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/src/styles/__mocks__/styleMock.js',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
  },
  coverageReporters: ['json-summary', 'text', 'lcov'],
};
