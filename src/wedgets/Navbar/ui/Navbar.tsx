import React from 'react';
import {classNames} from "shared/lib/ClassNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";
import ThemeSwitcher from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Main Pages</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About Pages</AppLink>
            </div>
        </div>
    );
};

