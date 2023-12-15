const path = require('path')

const buildEslintCommand = filenames =>
    `next lint --fix --file ${filenames
        .map(f => path.relative(process.cwd(), f))
        .join(' --file ')}`

module.exports = {
    '**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,css,json,svg,yaml,yml,md,mdx}':
        'prettier -w',
    '**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': [buildEslintCommand],
}
