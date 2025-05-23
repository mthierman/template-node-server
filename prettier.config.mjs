/** @type {import('prettier').Config} */

export default {
    printWidth: 100,
    tabWidth: 4,
    bracketSameLine: true,
    quoteProps: "consistent",
    overrides: [
        {
            files: ["*.yml", "*.yaml"],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
