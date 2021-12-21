module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
    },
    rules: {
        'import/prefer-default-export': 0,
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'never']
    }
}
