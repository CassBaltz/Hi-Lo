module.exports = {
  extends: "react-app",
  rules: {
    "object-curly-spacing": "always",
    "comma-dangle": "always",
    "max-len": [2, {
      "code": 80,
      "comments": 80,
    }],
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      "jsx": true,
    }
  },
}