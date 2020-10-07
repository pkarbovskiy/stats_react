const { esNextPaths } = require('./scripts/shared/pathsByLanguageVersion');

module.exports = {
    bracketSpacing: true,
    singleQuote: true,
    jsxBracketSameLine: true,
    printWidth: 80,
    parser: 'babel',

    overrides: [
        {
            files: esNextPaths,
        },
    ],
};
