module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "prettier",
        "sort-imports-es6-autofix",
    ],
    root: true,
    rules: {
        "prettier/prettier": "error",
        "sort-imports-es6-autofix/sort-imports-es6": [2, {
            "ignoreCase": false,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
        }],
        "no-var": "error",
    }
};