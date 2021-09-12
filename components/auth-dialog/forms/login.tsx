import React from 'react';
import {Button, TextField} from '@material-ui/core';


interface LoginFormsProps {
  opOpenRegister: () => void;
}

const LoginForms: React.FC<LoginFormsProps> = ({opOpenRegister}) => {
    return (
        <>
            <div className='mt-40'>
                <TextField
                    className="mb-20"
                    size={'small'}
                    label={'Почта'}
                    variant={'outlined'}
                    fullWidth
                />
                <TextField
                    className="mb-20"
                    size={'small'}
                    label={'Пароль'}
                    variant={'outlined'}
                    fullWidth
                />
            </div>

            <div className="d-flex justify-between">
                <Button variant={'contained'} color={'primary'}>
                    Войти
                </Button>
                <Button onClick={opOpenRegister} color={'primary'}>
                    Регистрация
                </Button>
            </div>
        </>
    );
};

export default LoginForms;
