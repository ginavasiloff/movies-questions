module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  testMatch: ['**/*.test.ts', '**/*.integration.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
