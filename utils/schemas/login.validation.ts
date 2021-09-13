import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Почта обязательная'),
    password: yup.string().min(6, 'Пароль не менее 6 символов').required('Пароль обязательный'),
});

export const registerForm = yup.object().shape({
    fullName: yup.string().required('Имя обязательно'),
}).concat(loginSchema);
