module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    // 'plugin:vue/vue3-essential', // lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
  }
}
