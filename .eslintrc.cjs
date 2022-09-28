/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: '.*', args: 'none' }
    ],
    'generator-star-spacing': 'off',
    'no-irregular-whitespace': 'off',
    'no-tabs': 'off',
    'no-debugger': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'global-require': 'off',
    'vue/script-setup-uses-vars': 'off',
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': true
    }]// 如果使用 script-setup 可開啟
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}
