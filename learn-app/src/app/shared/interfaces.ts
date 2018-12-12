export interface Customer{
    id: number;
    name: String;
    city: String;
    orderTotal?: number;
    customerSince: any;
}

export interface Order{
    customerId: number;
    orderItems: OrderItem[];
}

export interface OrderItem{
    itemId: number;
    name: String;
    itemCost: number;
}