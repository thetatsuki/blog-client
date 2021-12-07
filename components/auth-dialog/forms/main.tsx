import React from 'react';
import {Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../../redux/slices/user';
import {setCookie} from 'nookies';

interface MainFormProps {
    onOpenLogin: () => void,
}

const MainForm: React.FC<MainFormProps> = ({onOpenLogin}) => {
    const dispatch = useDispatch();

    const onClickAuth = () => {
        const win = window.open(
            'http://localhost:5000/auth/vkontakte',
            'Auth',
            'width=500,height=500,status=yes,toolbar=no,menubar=no,location=no',
        );
    };

    React.useEffect(() => {
        window.addEventListener('message', ({data}) => {
            if (typeof data === 'string') {
                const user = JSON.parse(data);
                dispatch(setUserData(user));
                setCookie(null, 'token', user.access_token, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                });
            }
        });
    }, []);

    return (
        <>
            <Button color="inherit" variant='contained' startIcon={
                <svg fill="none" viewBox="0 0 24 24" id="v_facebook">
                    <path
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.992 3.656 9.129 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.262c-1.242 0-1.629.772-1.629 1.563V12h2.774l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.992 22 12z"
                        fill="#1877F2"
                    />
                    <path
                        d="M15.893 14.89l.443-2.89h-2.773v-1.875c0-.791.386-1.563 1.628-1.563h1.262v-2.46s-1.144-.196-2.238-.196c-2.285 0-3.777 1.385-3.777 3.89V12h-2.54v2.89h2.54v6.989a10.058 10.058 0 003.124 0V14.89h2.33z"
                        fill="#fff"
                    />
                </svg>
            }>
                Facebook
            </Button>

            <Button onClick={onClickAuth} color="inherit" variant='contained' startIcon={
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 23.04C0 12.1788 0 6.74826 3.37413 3.37413C6.74826 0 12.1788 0 23.04 0H24.96C35.8212 0 41.2517 0 44.6259 3.37413C48 6.74826 48 12.1788 48 23.04V24.96C48 35.8212 48 41.2517 44.6259 44.6259C41.2517 48 35.8212 48 24.96 48H23.04C12.1788 48 6.74826 48 3.37413 44.6259C0 41.2517 0 35.8212 0 24.96V23.04Z"
                        fill="#0077FF"/>
                    <path
                        d="M25.54 34.5801C14.6 34.5801 8.3601 27.0801 8.1001 14.6001H13.5801C13.7601 23.7601 17.8 27.6401 21 28.4401V14.6001H26.1602V22.5001C29.3202 22.1601 32.6398 18.5601 33.7598 14.6001H38.9199C38.0599 19.4801 34.4599 23.0801 31.8999 24.5601C34.4599 25.7601 38.5601 28.9001 40.1201 34.5801H34.4399C33.2199 30.7801 30.1802 27.8401 26.1602 27.4401V34.5801H25.54Z"
                        fill="white"/>
                </svg>
            }>
                Вконтакте
            </Button>

            <Button onClick={onOpenLogin} color="inherit" variant='contained' startIcon={
                <svg viewBox="0 0 24 24" id="v_email">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 8a4 4 0 014-4h12a4 4 0 014 4v8a4 4 0 01-4 4H6a4 4 0 01-4-4V8zm2.026-.32l6.947 4.156a2 2 0 002.054 0l6.947-4.157A2 2 0 0018 6H6a2 2 0 00-1.974 1.68zM20 9.993l-5.946 3.558a4 4 0 01-4.108 0L4 9.994V16a2 2 0 002 2h12a2 2 0 002-2V9.994z">
                    </path>
                </svg>
            }>
                Через почту
            </Button>
        </>
    );
};

export default MainForm;
