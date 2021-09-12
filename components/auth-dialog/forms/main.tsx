import React from 'react';
import {Button} from '@material-ui/core';

interface MainFormProps {
    onOpenLogin: () => void,
}

const MainForm: React.FC<MainFormProps> = ({onOpenLogin}) => {
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

            <Button color="inherit" variant='contained' startIcon={
                <svg fill="none" viewBox="0 0 24 24" id="v_twitter">
                    <path
                        d="M19.953 7.983c.012.174.012.347.012.523C19.965 13.844 15.837 20 8.29 20v-.003A11.75 11.75 0 012 18.186a8.322 8.322 0 006.073-1.674c-1.756-.033-3.296-1.16-3.834-2.806a4.152 4.152 0 001.853-.07C4.178 13.256 2.8 11.6 2.8 9.676v-.05c.57.312 1.21.486 1.863.505a4.007 4.007 0 01-1.27-5.394 11.708 11.708 0 008.456 4.22 4.002 4.002 0 011.187-3.86 4.153 4.153 0 015.806.176c.919-.178 1.8-.51 2.606-.98a4.067 4.067 0 01-1.804 2.233A8.26 8.26 0 0022 5.89a8.267 8.267 0 01-2.047 2.093z"
                        fill="#1D9BF0"
                    />
                </svg>
            }>
                Twitter
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
