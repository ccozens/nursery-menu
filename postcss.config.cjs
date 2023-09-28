/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNesting = require('postcss-nesting');
const cssnano = require('cssnano');

const config = {
	plugins: [autoprefixer, postcssNesting, postcssPresetEnv, cssnano]
};

module.exports = config;
