describe("Account: getNumber", function () {
    it("returns account number",
        function () {
            let account=new Account(12345);
            assert.equal(12345,account.getNumber());
        });
});

describe("Account: getBalance", function () {
    it("returns account balance",
        function () {
            let account=new Account(12345);
            assert.equal(0.0,account.getBalance());
        });
});

describe("Account: deposit", function () {
    it("deposit 100 into account and checks balance",
        function () {
            let account=new Account(12345);
            account.deposit(100);
            assert.equal(100.0, account.getBalance());

        });
        it("try to deposit -100 into account",
        function () {
            let account=new Account(12345);
            assert.throws(()=>{account.deposit(-100)},RangeError,"Deposit amount has to be greater than zero");

        });
});

describe("Account: withdraw", function () {
    it("deposit 100, then withdraw 20 & check balance",
        function () {
            let account=new Account(12345);
            account.deposit(100);
            account.withdraw(20);
            assert.equal(80.0, account.getBalance());

        });
        it("tries to withdraw negative amount",
        function () {
            let account=new Account(12345);
            assert.throws(()=>{account.withdraw(-100)},RangeError,"Withdraw amount has to be greater than zero");

        });
        it("tries to withdraw but account has insufficient funds",
        function () {
            let account=new Account(12345);
            assert.throws(()=>{account.withdraw(100)},Error,"Insufficient funds");

        });
});


describe("Account: toString", function () {
    it("returns a string with account details",
        function () {
            let account=new Account(12345);
            assert.equal("Account 12345: balance 0", account.toString());
        });
});

describe("SavingsAccount: getInterest", function () {
    it("get Interest rate from SavingsAccount object",
        function () {
            let account=new SavingsAccount(12345,10);
            assert.equal(10, account.getInterest());
        });
});

describe("SavingsAccount: setInterest", function () {
    it("set Interest rate to SavingsAccount object",
        function () {
            let account=new SavingsAccount(12345,10);
            account.setInterest(18);
            assert.equal(18, account.getInterest());
        });
});

describe("SavingsAccount: addInterest", function () {
    it("add interest to balance in SavingsAccount object",
        function () {
            let account=new SavingsAccount(12345,10);
            account.deposit(100);
            account.addInterest();
            assert.equal(110, account.getBalance());
        });
});

describe("SavingsAccount: toString", function () {
    it("returns a string with SavingsAccount details",
        function () {
            let account=new SavingsAccount(12345,10);
            assert.equal("Savings Account 12345: balance 0 , interest: 10", account.toString());
        });
});

describe("CheckingAccount: getOverdraftLimit", function () {
    it("get overdraft limit from CheckingAccount object",
        function () {
            let account=new CheckingAccount(12345,500);
            assert.equal(500, account.getOverdraftLimit());
        });
});

describe("CheckingAccount: setOverdraftLimit", function () {
    it("set overdraft limit from CheckingAccount object",
        function () {
            let account=new CheckingAccount(12345,500);
            account.setOverdraftLimit(1000);
            assert.equal(1000, account.getOverdraftLimit());
        });
});

describe("CheckingAccount: withdraw", function () {
    it("deposit 100, then withdraw 150 & check balance",
        function () {
            let account=new CheckingAccount(12345,500);
            account.deposit(100);
            account.withdraw(150);
            assert.equal(-50, account.getBalance());

        });
        it("tries to withdraw negative amount",
        function () {
            let account=new CheckingAccount(12345,500);
            assert.throws(()=>{account.withdraw(-100)},RangeError,"Withdraw amount has to be greater than zero");

        });
        it("tries to withdraw more than overdraft limit",
        function () {
            let account=new CheckingAccount(12345,500);
            assert.throws(()=>{account.withdraw(600)},Error,"Overdraft Limit exceeded!");

        });
});

describe("CheckingAccount: toString", function () {
    it("returns a string with CheckingAccount details",
        function () {
            let account=new CheckingAccount(12345,500);
            assert.equal("Checking Account 12345: balance 0 , overdraft limit: 500", account.toString());
        });
});

describe("Bank: addAccount", function () {
    it("creates a account in bank and returns its number",
        function () {
            let bank=new Bank();
            assert.equal(1, bank.addAccount());
            assert.equal("Account", bank._accounts[0].constructor.name);
        });
});

describe("Bank: addSavingsAccount", function () {
    it("takes interest parameter, creates a savings account in bank and returns its number",
        function () {
            let bank=new Bank();
            assert.equal(1, bank.addSavingsAccount(10));
            assert.equal("SavingsAccount", bank._accounts[0].constructor.name);
        });
});

describe("Bank: addCheckingAccount", function () {
    it("takes overdraft limit parameter, creates a savings account in bank and returns its number",
        function () {
            let bank=new Bank();
            assert.equal(1, bank.addCheckingAccount(500));
            assert.equal("CheckingAccount", bank._accounts[0].constructor.name);
        });
});

describe("Bank: closeAccount", function () {
    it("takes account number parameter, deletes the relevant account in bank",
        function () {
            let bank=new Bank();
            bank.addAccount();
            bank.addAccount();
            bank.addSavingsAccount(10)
            bank.addAccount();
            bank.addCheckingAccount(500);
            bank.closeAccount(2);
            assert.equal(4, bank._accounts.length);
        });
});


describe("Bank: accountReport", function () {
    it("returns all accounts list in bank",
        function () {
            let bank=new Bank();
            bank.addAccount();
            bank.addAccount();
            bank.addSavingsAccount(10)
            bank.addAccount();
            bank.addCheckingAccount(500);
            assert.equal("Account 1: balance 0\nAccount 2: balance 0\nSavings Account 3: balance 0 , interest: 10\nAccount 4: balance 0\nChecking Account 5: balance 0 , overdraft limit: 500", bank.accountReport());
        });
});


describe("SavingsAccount: endOfMonth", function () {
    it("adds interest to saving account and return details",
        function () {
            let account=new SavingsAccount(12345,2.5);
            account.deposit(100);
            assert.equal("Interest added Savings Account 12345: balance 102.5 , interest: 2.5", account.endOfMonth());
        });
});

describe("CheckingAccount: endOfMonth", function () {
    it("checks account balance and return its details and warnings",
        function () {
            let account=new CheckingAccount(12345,500);
            account.withdraw(100);
            assert.equal("Warning, low balance Checking Account 12345: balance -100 , overdraft limit: 500", account.endOfMonth());
        });
});

describe("Bank: endOfMonth", function () {
    it("returns all accounts end of month report",
        function () {
            let bank=new Bank();
            bank.addAccount();
            bank.addAccount();
            let acc=bank.addSavingsAccount(2.5);
            bank._accounts[acc-1].deposit(100);
            bank.addAccount();
            acc=bank.addCheckingAccount(500);
            bank._accounts[acc-1].withdraw(100);
            assert.equal("\n\nInterest added Savings Account 3: balance 102.5 , interest: 2.5\n\nWarning, low balance Checking Account 5: balance -100 , overdraft limit: 500", bank.endOfMonth());
        });
});





