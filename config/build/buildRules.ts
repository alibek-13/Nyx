import webpack from "webpack";

export function buildRules () :webpack.RuleSetRule[] {
    return [
        {
            exclude: /node_modules/,
            test: /\.([cm]?ts|tsx)$/,
            use: 'ts-loader',
        },
    ]
}