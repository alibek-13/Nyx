import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'


const config:webpack.Configuration = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    mode: "development",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.([cm]?ts|tsx)$/,
                use: 'ts-loader',
            },
        ],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
}

export default config;
