import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./type/config";

export function buildLoader({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader:
                    "css-loader",
                options: {
                    // importLoaders: 1,
                    modules:
                        {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: isDev
                                ? '[path][name]__[local]--[hash:base64:5]'
                                : '[hash:base64:8]'
                        },

                }
            },
            "sass-loader",
        ],
    }

    const typeScriptLoader = {
        exclude: /node_modules/,
        test: /\.([cm]?ts|tsx)$/,
        use: 'ts-loader',
    }
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
    return [
        fileLoader,
        svgLoader,
        typeScriptLoader,
        scssLoader
    ]
}