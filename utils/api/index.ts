import axios from 'axios';
import {LoginDto, RegisterDto, ResponseUserAuth} from './type';


const Axios = axios.create({
    baseURL: 'http://localhost:5000/',
});


export const UserApi = {
    async register(dto: RegisterDto) {
        const {data} = await Axios.post<RegisterDto, {data: ResponseUserAuth}>('/auth/register', dto);
        return data;
    },
    async login(dto: LoginDto) {
        const {data} = await Axios.post<RegisterDto, {data: ResponseUserAuth}>('/auth/login', dto);
        return data;
    },
};
