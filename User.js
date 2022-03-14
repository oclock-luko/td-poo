const BankAccount = require('./BankAccount');
const BankAccountPremium = require('./BankAccountPremium');
const Cart = require('./Cart');

class User {
    firstName;
    lastName;
    email;
    bankAccount;

    constructor(firstName, lastName, email, premium = false) {
        if (typeof firstName === 'string' && firstName.length > 1) {
            this.firstName = firstName;
        } else {
            console.log('Erreur ! Le prénom doit être une chaîne de caractères contenant au moins 2 caractères.');
        }

        if (typeof lastName === 'string' && lastName.length > 1) {
            this.lastName = lastName;
        } else {
            console.log('Erreur ! Le nom doit être une chaîne de caractères contenant au moins 2 caractères.');
        }

        if (typeof email === 'string' && email.includes('@')) {
            this.email = email;
        } else {
            console.log('Erreur ! Le mail doit être une chaîne de caractères contenant au moins un @.');
        }

        if (premium) {
            this.bankAccount = new BankAccountPremium(50);
        } else {
            this.bankAccount = new BankAccount(50);
        }

        this.cart = new Cart();
    };

    displayInformation() {
        console.log(`Bonjour ${this.firstName} ${this.lastName}.`);
        console.log(`Votre e-mail est : ${this.email}`);
    };
};

module.exports = User;