export interface Iproduct {
    id?: number;
    name: string;
    price: number;
    quantity: number;
    description: string;
    image: string;
}

export interface User {
    username?: string;
    email: string;
    password: string;
    role?: string;
}