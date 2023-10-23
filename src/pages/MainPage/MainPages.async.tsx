import { lazy } from 'react';

export const MainPagesAsync = lazy(() => new Promise(resolve =>{
    // @ts-ignore
    setTimeout( ()=> resolve( import('./MainPages')), 1500)
}));