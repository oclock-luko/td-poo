class BankAccount {
    balance;

    static totalBankTransactions = 0;

    constructor(balance = 0) {
        this.balance = balance;
    };

    credit(value) {
        BankAccount.totalBankTransactions++;
        this.balance += value;
    };

    debit(value) {
        BankAccount.totalBankTransactions++;
        this.balance -= value;
    };

    displayBalance() {
        console.log(`Vous avez ${this.balance}€ dans votre compte.`);

        if (this.balance < 0) {
            console.log('Attention, vous êtes à découvert !');
        }

        console.log(`Big Bank© a réalisé ${BankAccount.totalBankTransactions} transactions au total.`);
    }
}

module.exports = BankAccount;