"use strict";

class SavingsAccount extends Account{

    constructor(number,interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        this._interest=interest;
    }

    addInterest()
    {
        this._balance+=this._balance*(this._interest/100);
    }

    toString()
    {
        return "Savings Account " + this._number + ": balance " + this._balance + " , interest: "+this._interest;
    }

    endOfMonth()
    {
        this.addInterest();
        return "Interest added "+this.toString();
    }
}