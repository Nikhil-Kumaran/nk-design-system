module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/jest-setup.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/src/mocks/svgr.ts",
  },
  verbose: true,
};
