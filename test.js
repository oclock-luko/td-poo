const Item = require('./Item');
const User = require('./User');

const robert = new User('Robert', 'Dupont', 'robert@dupont.com');

robert.bankAccount.displayBalance();

const laptop = new Item(2000);
const monitor = new Item(200);
const keyboard = new Item(100);

robert.cart.addItem(laptop);
robert.cart.addItem(monitor);
robert.cart.addItem(keyboard);

robert.bankAccount.debit(robert.cart.totalPrice);

robert.bankAccount.displayBalance();




const julie = new User('Julie', 'Durand', 'julie@durand.com', true);

julie.bankAccount.displayBalance();

julie.cart.addItem(laptop);

julie.bankAccount.debit(julie.cart.totalPrice);

julie.bankAccount.displayBalance();