export interface Product {
    idProduct : number
    nameProduct : string
    priceProduct : number
    stockProduct : number
}

export interface Customer {
    idCustomer : number
    nameCustomer : string
    emailCustomer : string
}

export interface OrderItem {
    product : Product
    quantity : number
}

export interface Order {
    idOrder : number
    customerOrder : Customer
    itemsOrder : OrderItem[]
    statusOrder : Status
}

export enum Status {
    en_attente,
    expédiée,
    livré
}