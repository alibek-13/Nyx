import {RouteProps} from "react-router-dom";
import {MainPages} from "pages/MainPage";
import {AboutPages} from "pages/AboutPages";

export enum AppRoutes {
    MAIN =  'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export  const routesConfig: Record<AppRoutes, RouteProps> ={
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPages />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPages/>
    }
}