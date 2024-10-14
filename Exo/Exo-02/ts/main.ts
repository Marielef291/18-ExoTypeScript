import { OrderManager } from "./class.js";
import { calculateTotal, createOrder } from "./fonction.js";
import { Customer, OrderItem, Product, Status } from "./interface.js";

console.log("=== Début de l'application de gestion des commandes ===\n");

// Création de quelques produits
const product1: Product = { idProduct: 1, nameProduct: 'Laptop', priceProduct: 1000, stockProduct: 5 };
const product2: Product = { idProduct: 2, nameProduct: 'Phone', priceProduct: 500, stockProduct: 10 };
console.log("Produits créés:");
console.log(`- Produit 1 : ${product1.nameProduct}, Prix : ${product1.priceProduct}€, Stock : ${product1.stockProduct}`);
console.log(`- Produit 2 : ${product2.nameProduct}, Prix : ${product2.priceProduct}€, Stock : ${product2.stockProduct}\n`);

// Création d'un client
const customer1: Customer = { idCustomer: 1, nameCustomer: 'John Doe', emailCustomer: 'john@example.com' };
console.log(`Client créé : ${customer1.nameCustomer}, Email : ${customer1.emailCustomer}\n`);

// Création d'articles de commande
const item1: OrderItem = { product: product1, quantity: 1 };
const item2: OrderItem = { product: product2, quantity: 2 };
console.log("Articles de commande créés:");
console.log(`- Article 1 : ${item1.product.nameProduct}, Quantité : ${item1.quantity}`);
console.log(`- Article 2 : ${item2.product.nameProduct}, Quantité : ${item2.quantity}\n`);

// Création de deux commandes
const order1 = createOrder(customer1, [item1, item2]);
const order2 = createOrder(customer1, [item2]);
console.log("Commandes créées avec statut 'en attente':");
console.log(`- Commande 1 : ${order1.idOrder}, Client : ${order1.customerOrder.nameCustomer}, Nombre d'articles : ${order1.itemsOrder.length}`);
console.log(`- Commande 2 : ${order2.idOrder}, Client : ${order2.customerOrder.nameCustomer}, Nombre d'articles : ${order2.itemsOrder.length}\n`);

// Instanciation du gestionnaire de commandes
const orderManager = new OrderManager();
console.log("Gestionnaire de commandes instancié.\n");

// Ajout des commandes dans le gestionnaire
orderManager.addOrder(order1);
orderManager.addOrder(order2);
console.log("Commandes ajoutées au gestionnaire.\n");

// Afficher les commandes en attente
console.log("Liste des commandes avec statut 'en attente' :");
const pendingOrders = orderManager.listOrdersByStatus(Status.en_attente);
pendingOrders.forEach(order => {
    console.log(`- Commande ID : ${order.idOrder}, Client : ${order.customerOrder.nameCustomer}`);
});
console.log();

// Calculer le total de la première commande
const total1 = calculateTotal(order1);
console.log(`Total de la commande 1 (${order1.idOrder}) : ${total1}€\n`);

// Mettre à jour le statut de la première commande
orderManager.updateOrderStatus(order1.idOrder, Status.expédiée);
console.log(`Statut de la commande 1 (${order1.idOrder}) mis à jour en : 'expédiée'.\n`);

// Afficher la commande mise à jour
const updatedOrder1 = orderManager.getOrderById(order1.idOrder);
if (updatedOrder1) {
    console.log(`Commande mise à jour : ${updatedOrder1.idOrder}`);
    console.log(`- Client : ${updatedOrder1.customerOrder.nameCustomer}`);
    console.log(`- Statut : ${updatedOrder1.statusOrder}\n`);
}

// Supprimer la première commande
orderManager.removeOrder(order1.idOrder);
console.log(`Commande 1 (${order1.idOrder}) supprimée.\n`);

// Vérifier les commandes restantes
console.log("Vérification des commandes restantes avec statut 'en attente' après suppression :");
const remainingOrders = orderManager.listOrdersByStatus(Status.en_attente);
if (remainingOrders.length > 0) {
    remainingOrders.forEach(order => {
        console.log(`- Commande ID : ${order.idOrder}, Client : ${order.customerOrder.nameCustomer}`);
    });
} else {
    console.log("Aucune commande avec le statut 'en attente'.");
}

console.log("\n=== Fin de l'application de gestion des commandes ===");
