import { Status } from "./interface.js";
export function createOrder(c, liP) {
    return {
        idOrder: Math.random(),
        customerOrder: c,
        itemsOrder: liP,
        statusOrder: Status.en_attente
    };
}
export function calculateTotal(o) {
    let montantTotal;
    let liP = o.itemsOrder;
    for (let c = 0; c < liP.length; c++) {
        montantTotal += liP[c].product.priceProduct * liP[c].quantity;
    }
    return montantTotal;
}
