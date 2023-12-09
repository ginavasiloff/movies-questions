module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  testMatch: ['**/*.unit.ts', '**/*.integration.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
