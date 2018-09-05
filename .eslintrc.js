// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    node: true,
    mocha: true
  },
  plugins: ['prettier'],
  extends: ['airbnb-base', 'plugin:node/recommended', 'plugin:prettier/recommended'],
  rules: {
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'global-require': 'off',
    'arrow-body-style': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'quote-props': 'off',
    'class-methods-use-this': 'off'
  },
  globals: {
    io: false
  }
};
