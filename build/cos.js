/* 配合蓝盾发布到腾讯CDN */

const pkg = require('../package.json');
const { execSync } = require('child_process');

execSync(`mkdir -p dist/cos/${pkg.version}`);
execSync(`mv dist/weui.js dist/weui.min.js dist/cos/${pkg.version}`);
