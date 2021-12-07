import 'macro-css';
import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import {MuiThemeProvider, CssBaseline} from '@material-ui/core';
import {parseCookies} from 'nookies';

import {theme} from '../theme';
import {wrapper} from '../redux/store';
import {Header} from '../components';
import {UserApi} from '../utils/api';
import {selectUserData, setUserData} from '../redux/slices/user';
import {useSelector} from 'react-redux';

function App({Component, pageProps}: AppProps) {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Component {...pageProps} />
        </MuiThemeProvider>
    );
}

App.getInitialProps = wrapper.getInitialAppProps((store) =>
    async ({ctx, Component}) => {
        const user = store.getState();
        try {
            const {token} = parseCookies(ctx);
            const data = await UserApi.getMe(token);
            store.dispatch(setUserData(data));
            return {
                pageProps: {
                    ...(Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {}),
                },
            };
        } catch (err) {
            console.log(err);
            return {
                pageProps: {
                    ...(Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {}),
                },
            };
        }
    },
);

export default wrapper.withRedux(App);
