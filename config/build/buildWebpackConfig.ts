import {BuildOptions} from "./type/config";
import webpack from "webpack";
import {buildLoader} from "./buildLoader";
import {buildPlugins} from "./buildPlugins";
import {buildResolve} from "./buildResolve";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig (option: BuildOptions):webpack.Configuration {
    const {mode, paths, isDev} = option
    return {
        entry: paths.entry,
        mode: mode,
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
        },
        module: {
            rules: buildLoader(option),
        },
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(option),
        resolve: buildResolve(),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: isDev ? buildDevServer(option) : undefined,
    }
}