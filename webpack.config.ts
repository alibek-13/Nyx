import path from 'path';
import webpack from 'webpack'
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/type/config";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),

}
const mode = 'development'
const isDev = mode === 'development'

const config:webpack.Configuration = buildWebpackConfig({
    mode: "production",
    paths,
    isDev

})

export default config;
