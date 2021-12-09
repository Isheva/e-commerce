export interface Products {
    id?: number;
    type: string;
    name: string;
    currency: string;
    pricePerOne?: number;
    price: number;
    src: string;
    amount?: number;
}