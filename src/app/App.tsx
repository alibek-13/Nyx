import React from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/themeProviders";
import {classNames} from "shared/lib/ClassNames/classNames";
import {AppRouter} from "app/providers/route";
import {Navbar} from "wedgets/Navbar";

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>

        </div>
    );
};

export default App;