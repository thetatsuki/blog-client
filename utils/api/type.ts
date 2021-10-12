export interface LoginDto {
    email: string;
    password: string;
}
export interface RegisterDto extends LoginDto {
    fullName: string;
}
export interface ResponseUserAuth {
    access_token: string;
    email: string;
    fullName: string;
    id: number;
    createdAt: string;
    updatedAt: string;
}
