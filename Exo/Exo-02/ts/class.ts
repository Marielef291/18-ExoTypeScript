import { Order, Status } from "./interface.js";

export class OrderManager {
    orders : Order [] 

    constructor(){
        this.orders=[]
    }

    addOrder(order: Order): void {
        this.orders.push(order)
    }

    getOrderById(id: number): Order {
        return this.orders.find(order => order.idOrder === id)
    } 

    updateOrderStatus(id: number, status: Status):void{
        this.orders.find(order => order.idOrder === id).statusOrder = status
    }

    listOrdersByStatus(status: Status) : Order[] {
        return this.orders.filter(order => order.statusOrder === status)
    }

    removeOrder(id: number) : void {
        this.orders = this.orders.filter(order => order.idOrder !== id)
    }

}