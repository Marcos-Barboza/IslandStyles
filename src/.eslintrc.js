module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y', 'prettier'],
    rules: {
        'react/prop-types': 0,
        'no-underscore-dangle': 0,
        'import/no-cycle': 0,
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.tsx'],
            },
        ],
        'import/prefer-default-export': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
            node: {
                paths: ['src'],
            },
        },
    },
}
