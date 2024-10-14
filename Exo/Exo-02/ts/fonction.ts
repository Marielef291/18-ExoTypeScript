import { Product, Customer, OrderItem, Order, Status } from "./interface.js";

export function createOrder(c : Customer, liP : OrderItem[]): Order{

    return {
        idOrder : Math.random(),
        customerOrder:c,
        itemsOrder : liP,
        statusOrder : Status.en_attente
    }
}

export function calculateTotal (o : Order) : number{
    let montantTotal  : number
    let liP : OrderItem [] = o.itemsOrder
    for (let c = 0; c < liP.length; c++) {
        montantTotal += liP[c].product.priceProduct*liP[c].quantity
    }
    return montantTotal
}