

const bankAccount = {
    accountBalance: 0,
    deposit: function(amount) {
        this.accountBalance += amount;
        return `Deposited ${amount}. Your new balance is ${this.accountBalance}`;
    },
    withdraw: function(amount) {
        if (amount > this.accountBalance) {
            return "Insufficient funds";
        } else {
            this.accountBalance -= amount;
            return `Withdrew ${amount}. Your new balance is ${this.accountBalance}`;
        }
    },
    checkBalance: function() {
        return `Current balance is ${this.accountBalance}`;
    }
};


console.log(bankAccount.deposit(1000));
console.log(bankAccount.checkBalance());
console.log(bankAccount.withdraw(200));
console.log(bankAccount.checkBalance());
console.log(bankAccount.withdraw(2000));
console.log(bankAccount.checkBalance());
