import React, {Suspense, useContext} from 'react';
import './styles/index.scss'
import {Counter} from "./component/counter";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPagesAsync} from "./pages/AboutPages/AboutPages.async";
import {MainPagesAsync} from "./pages/MainPage/MainPages.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/ClassNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Main Pages </Link>
            <> dd </>
            <Link to={'/about'}>About Pages</Link>
            <Suspense fallback={<div> Loading...
            </div>
            }>
                <Routes>
                    <Route path={'/about'} element={<AboutPagesAsync/>}/>
                    <Route path={'/'} element={<MainPagesAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;