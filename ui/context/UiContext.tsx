import React from 'react';
import {useMediaQuery, useTheme} from '@material-ui/core';

type screenResolution = {
    isDesktop: boolean,
    isLaptop: boolean,
    isTablet: boolean,
    isMobile: boolean
}

export const UiContext = React.createContext(
    {
        screenResolution: {
            isDesktop: false,
            isLaptop: false,
            isTablet: false,
            isMobile: false
        } as screenResolution,
        isAboveTablet: false,
    }
);

export const UiProvider = (props: {children: React.ReactElement | React.ReactElement[] }): React.ReactElement => {
    const theme = useTheme();

    const screenResolution = {
        isDesktop: useMediaQuery(theme.breakpoints.up('lg')),
        isLaptop: useMediaQuery(theme.breakpoints.only('md')),
        isTablet: useMediaQuery(theme.breakpoints.only('sm')),
        isMobile: useMediaQuery(theme.breakpoints.only('xs')),
    }

    const isAboveTablet = screenResolution.isLaptop || screenResolution.isDesktop;

    return (
        <UiContext.Provider
            value={{
                screenResolution: screenResolution,
                isAboveTablet: isAboveTablet,
            }}
        >
            {props.children}
        </UiContext.Provider>
    )
}