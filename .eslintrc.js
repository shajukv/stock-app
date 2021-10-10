module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      requireConfigFile: false,
       babelOptions: {
       presets: ["@babel/preset-react"]
       }
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:eslint-comments/recommended',
      'plugin:prettier/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      'no-unused-vars': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
       },
       
  }