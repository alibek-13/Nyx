import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPages} from "pages/AboutPages";
import {MainPages} from "pages/MainPage";
import {routesConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div> Loading...</div>}>
            <Routes>
                {Object.values(routesConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;