class Cart {
    items = [];
    totalPrice = 0;

    addItem(item) {
        this.items.push(item);
        this.totalPrice += item.price;
    };
};

module.exports = Cart;