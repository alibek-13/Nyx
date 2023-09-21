import {BuildOptions} from "./type/config";
import {Configuration as DevServerConfig} from "webpack-dev-server"

export function buildDevServer (option: BuildOptions): DevServerConfig {
    return {
        port: option.port,
        open: true,
    }
}