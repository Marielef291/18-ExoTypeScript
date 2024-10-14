export class OrderManager {
    constructor() {
        this.orders = [];
    }
    addOrder(order) {
        this.orders.push(order);
    }
    getOrderById(id) {
        return this.orders.find(order => order.idOrder === id);
    }
    updateOrderStatus(id, status) {
        this.orders.find(order => order.idOrder === id).statusOrder = status;
    }
    listOrdersByStatus(status) {
        return this.orders.filter(order => order.statusOrder === status);
    }
    removeOrder(id) {
        this.orders = this.orders.filter(order => order.idOrder !== id);
    }
}
