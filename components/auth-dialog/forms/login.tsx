import React from 'react';
import {Button} from '@material-ui/core';

import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, FormProvider} from 'react-hook-form';
import {loginSchema} from '../../../utils/schemas/login.validation';
import FormField from '../../form-field';


interface LoginFormsProps {
  opOpenRegister: () => void;
}

const LoginForms: React.FC<LoginFormsProps> = ({opOpenRegister}) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    console.log(form.formState.errors);

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='mt-40'>
                    <FormField name={'email'} label={'Почта'} />
                    <FormField name={'password'} label={'Пароль'} />
                </div>
                <div className="d-flex justify-between">
                    <Button
                        disabled={!form.formState.isValid}
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
