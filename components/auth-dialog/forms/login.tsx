import React from 'react';
import {Button} from '@material-ui/core';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, FormProvider} from 'react-hook-form';
import {setCookie} from 'nookies';

import {loginSchema} from '../../../utils/schemas/login.validation';
import FormField from '../../form-field';
import {LoginDto} from '../../../utils/api/type';
import {UserApi} from '../../../utils/api';
import {Alert} from '@material-ui/lab';


interface LoginFormsProps {
    opOpenRegister: () => void;
}

const LoginForms: React.FC<LoginFormsProps> = ({opOpenRegister}) => {
    const [errorMessage, setErrorMessage] = React.useState<string>('');

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = async (dto: LoginDto) => {
        try {
            const data = await UserApi.login(dto);
            setCookie(null, 'token', data.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });
            setErrorMessage('');
        } catch (err) {
            console.warn('Ошибка при регистриации');
            setErrorMessage(err.response?.data.message);
        }
    };

    console.log(form.formState.errors);

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='mt-40'>
                    <FormField name={'email'} label={'Почта'}/>
                    <FormField name={'password'} label={'Пароль'}/>
                    {errorMessage && <Alert className='mt-15' severity="error">{errorMessage}</Alert>}
                </div>
                <div className="d-flex justify-between mt-10">
                    <Button
                        disabled={!form.formState.isValid || form.formState.isSubmitting}
                        className="mr-10"
                        style={{width: '120px'}}
                        type={'submit'}
                        variant={'contained'}
                        color={'primary'}
                    >
                        Войти
                    </Button>
                    <Button onClick={opOpenRegister} color={'primary'}>
                        Регистрация
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};

export default LoginForms;
