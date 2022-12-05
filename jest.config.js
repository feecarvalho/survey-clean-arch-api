
module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/protocols/*.ts',
    '!<rootDir>/src/**/*-protocols.ts',
    '!<rootDir>/src/**/domain/**/*.ts'
  ],
  preset: '@shelf/jest-mongodb',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
