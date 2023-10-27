import React, {FC} from 'react';
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib/ClassNames/classNames";
import cls from './AppLink.module.scss'

export enum AppLinkTheme{
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}
interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {children,className,theme = AppLinkTheme.PRIMARY, to, ...other} = props;
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]] )}
              {...other}>
            {children}
        </Link>
    );
};

