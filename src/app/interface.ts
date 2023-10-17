export interface Iproduct {
    id?: number;
    name?: string;
    price?: number;
    quantity?: number;
    description?: string;
    image?: string;
}

export interface IproductCart {
    id?: number;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
}

export interface User {
    username?: string;
    email: string;
    password: string;
    role?: string;
    major?: string;
    location?: string;
    age: number;
}