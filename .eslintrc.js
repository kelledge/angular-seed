// TODO: Updates in this file require watches to be re-run and editors to be reopened
module.exports = {
  "extends": ["eslint:recommended", "angular"],
  "env": {
    "node": true,
    "browser": true
  },
  "rules": {
    "quotes": [0, "single"],
    "eol-last": 0,
    "no-debugger": 1,
    "no-mixed-requires": 0,
    "no-underscore-dangle": 0,
    "no-multi-spaces": 0,
    "no-trailing-spaces": 0,
    "no-extra-boolean-cast": 0,
    "no-unused-vars": [2, {'args': 'none'}],
    "new-cap": 0,
    "camelcase": 0,
    "semi": 2,
    "angular/di": 2
  }
};
