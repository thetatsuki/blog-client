import {createTheme} from '@material-ui/core';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#4683D9',
        },
    },
    overrides: {
        MuiPaper: {
            rounded: {
                borderRadius: 8,
            },
        },
        MuiButton: {
            root: {
                borderRadius: '8px',
            },
            contained: {
                width: '50px',
                backgroundColor: 'white',
                boxShadow: '0 1px 1px rgb(0 0 0 / 10%), 0 2px 5px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 10%), 1px 0 0 rgb(0 0 0 / 10%)',
                '&:hover': {
                    backgroundColor: 'white',
                    boxShadow: '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)',
                },
                '&:active': {
                    backgroundColor: 'white',
                    boxShadow: '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)',
                },
            },
            containedPrimary: {
                textTransform: 'inherit',
                '&:hover': {
                    backgroundColor: '#437CCE',
                },
            },
            colorInherit: {
                textTransform: 'inherit',
            },
        },
        MuiTab: {
            textColorPrimary: {
                textTransform: 'inherit',
                fontSize: '16px',
                '&:hover': {
                    color: '#346EB8',
                },

            },
            selected: {
                color: 'yellow',
            },
        },
        MuiInput: {
            underline: {
                '::before': {
                    display: 'none',
                },
                '::after': {
                    display: 'none',
                },
            },
        },
    },
});
