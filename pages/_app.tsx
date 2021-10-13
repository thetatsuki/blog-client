import '../styles/globals.scss';
import 'macro-css';
import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';

import {MuiThemeProvider, CssBaseline} from '@material-ui/core';
import {theme} from '../theme';
import store from '../redux/store';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </MuiThemeProvider>
    );
}
export default MyApp;
