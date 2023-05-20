const config = {
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!axios/.*)"],
};

module.exports = config;
