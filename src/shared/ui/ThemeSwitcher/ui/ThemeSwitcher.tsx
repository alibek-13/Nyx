import React from 'react';
import {Theme, useTheme} from "app/providers/themeProviders";
import {classNames} from "shared/lib/ClassNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import Button, {ButtonTheme} from "shared/ui/Button/ui/Button";


interface ThemeSwitcherProps {
    className?: string;
}
const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames(cls.ThemeSwitcher)} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkTheme />: <LightTheme/>}
        </Button>
    );
};

export default ThemeSwitcher;