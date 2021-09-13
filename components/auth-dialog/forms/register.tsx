import React from 'react';
import {Button} from '@material-ui/core';
import FormField from '../../form-field';

import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {registerForm} from '../../../utils/schemas/login.validation';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({onOpenLogin}) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(registerForm),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    console.log(form.formState.errors);

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='mt-40'>
                    <FormField name={'fullName'} label={'Имя и пароль'} />
                    <FormField name={'email'} label={'Почта'} />
                    <FormField name={'password'} label={'Пароль'} />
                </div>

                <div className="d-flex justify-between">
                    <Button disabled={!form.formState.isValid} type={'submit'} variant={'contained'} color={'primary'}>
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
