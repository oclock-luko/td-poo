const BankAccount = require('./BankAccount');

class BankAccountPremium extends BankAccount {
    credit(value) {
        super.credit(value);
        this.value += 5; //Cadeau pour les comptes premium !
    };

    displayBalance() {
        console.log(`Vous avez ${this.balance}€ dans votre compte.`);

        if (this.balance < 0) {
            console.log('Pas de découvert pour les comptes premium, tout va bien !');
        }

        console.log(`Big Bank© a réalisé ${BankAccount.totalBankTransactions} transactions au total.`);
    }
}

module.exports = BankAccountPremium;