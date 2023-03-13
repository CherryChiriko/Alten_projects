export interface IUser{
    userName: string;
    password: string;
    name ?: string;
    surname ?: string;
    birthday ?: Date;
    address ?: string;
}

export interface IResult{
    resultMessage: string;
    success: boolean;
}
