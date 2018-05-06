module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "no-console": 0,
        "no-unused-vars": 0,
        "indent": 0,
        "semi": [
            "error",
            "always"
        ]
    }
};