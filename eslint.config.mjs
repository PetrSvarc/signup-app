import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/require-default-prop': 'error',
        'vue/component-api-style': ['error', ['script-setup']],

        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_'
        }],

        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },
    extends: [
        'plugin:nuxt/recommended',
    ],
    ignorePatterns: [
        'dist',
        'node_modules',
        '.output',
        '.nuxt'
    ]
})
