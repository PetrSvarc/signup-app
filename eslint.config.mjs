// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
    rules: {
        'vue/no-deprecated-slot-attribute': ['error', {
            'ignore': ['provet-button', 'provet-input']
        }],
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/require-default-prop': 'warn',
        'vue/component-api-style': ['error', ['script-setup']],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_'
        }],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    }
})
