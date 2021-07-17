import React from 'react';
import {useMediaQuery, useTheme} from '@material-ui/core';

export const UiContext = React.createContext(
    {
        screenResolution: {
            isDesktop: false,
            isLaptop: false,
            isTablet: false,
            isMobile: false
        },
    }
);

export const UiProvider = (props: {children: React.ReactElement }): React.ReactElement => {
    const theme = useTheme();

    const screenResolution = {
        isDesktop: useMediaQuery(theme.breakpoints.up('lg')),
        isLaptop: useMediaQuery(theme.breakpoints.only('md')),
        isTablet: useMediaQuery(theme.breakpoints.only('sm')),
        isMobile: useMediaQuery(theme.breakpoints.only('xs')),
    }

    return (
        <UiContext.Provider
            value={{
                screenResolution: screenResolution,
            }}
        >
            {props.children}
        </UiContext.Provider>
    )
}