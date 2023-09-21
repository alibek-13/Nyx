import {BuildOptions} from "./type/config";
import webpack from "webpack";
import {buildRules} from "./buildRules";
import {buildPlugins} from "./buildPlugins";
import {buildResolve} from "./buildResolve";

export function buildWebpackConfig (option: BuildOptions):webpack.Configuration {
    const {mode, paths} = option
    return {
        entry: paths.entry,
        mode: mode,
        module: {
            rules: buildRules(),
        },
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(option),
        resolve: buildResolve(),
    }
}