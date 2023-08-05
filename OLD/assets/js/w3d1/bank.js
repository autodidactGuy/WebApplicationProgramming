"use strict";

class Bank{
    constructor() {
        this._nextNumber=1;
        this._accounts=[];
    }

    addAccount()
    {
        let acc=new Account(this._nextNumber);
        this._accounts.push(acc);
        this._nextNumber++;
        return acc.getNumber();
    }

    addSavingsAccount(interest)
    {
        let acc=new SavingsAccount(this._nextNumber,interest);
        this._accounts.push(acc);
        this._nextNumber++;
        return acc.getNumber();
    }

    addCheckingAccount(overdraft)
    {
        let acc=new CheckingAccount(this._nextNumber,overdraft);
        this._accounts.push(acc);
        this._nextNumber++;
        return acc.getNumber();
    }

    closeAccount(number)
    {
        this._accounts=this._accounts.filter((acc)=>acc.getNumber()!=number);
    }

    accountReport()
    {
        return this._accounts.map((acc)=>acc.toString()).join("\n");
    }

    endOfMonth()
    {
        return this._accounts.map((acc)=>acc.endOfMonth()).join("\n");
    }

}