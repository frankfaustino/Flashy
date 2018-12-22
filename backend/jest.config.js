const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|tsx?|ts?)$'

module.exports = {
  collectCoverage: true,
  globalSetup: './jest.setup.js',
  // globalTeardown: './jest.teardown.js',
  rootDir: '.',
  moduleFileExtensions: ['ts', 'js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
}