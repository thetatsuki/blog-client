import React from 'react';
import {Button} from '@material-ui/core';
import {yupResolver} from '@hookform/resolvers/yup';
import {FormProvider, useForm} from 'react-hook-form';
import {setCookie} from 'nookies';

import FormField from '../../form-field';
import {registerForm} from '../../../utils/schemas/login.validation';
import {UserApi} from '../../../utils/api';
import {RegisterDto} from '../../../utils/api/type';
import {Alert} from "@material-ui/lab";

interface RegisterFormProps {
    onOpenLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({onOpenLogin}) => {
    const [errorMessage, setErrorMessage] = React.useState<string>('');
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(registerForm),
    });

    const onSubmit = async (dto: RegisterDto) => {
        try {
            const data = await UserApi.register(dto);
            setCookie(null, 'token', data.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });
        } catch (e) {
            setErrorMessage(e.response?.data.message);
        }
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='mt-40'>
                    <FormField name={'fullName'} label={'Имя и пароль'}/>
                    <FormField name={'email'} label={'Почта'}/>
                    <FormField name={'password'} label={'Пароль'}/>
                    {errorMessage && <Alert className='mt-15' severity="error">{errorMessage}</Alert>}
                </div>

                <div className="d-flex mt-10 justify-between">
                    <Button
                        disabled={!form.formState.isValid || form.formState.isSubmitting}
                        type={'submit'}
                        variant={'contained'}
                        color={'primary'}
                    >
                        Зарегистрироваться
                    </Button>
                    <Button className="ml-10" style={{width: '120px'}} onClick={onOpenLogin} color={'primary'}>
                        Войти
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};

export default RegisterForm;
