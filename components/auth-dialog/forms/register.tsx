import React from 'react';
import {Button, TextField} from '@material-ui/core';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({onOpenLogin}) => {
    return (
        <>
            <div className='mt-40'>
                <TextField
                    className="mb-20"
                    size={'small'}
                    label={'Имя и фамилия'}
                    variant={'outlined'}
                    fullWidth
                />
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
                    Регистрация
                </Button>
                <Button onClick={onOpenLogin} color={'primary'}>
                    Войти
                </Button>
            </div>
        </>
    );
};

export default RegisterForm;
