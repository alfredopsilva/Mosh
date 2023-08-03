"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid Amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Mosh';
seats.A2 = 'Alfredo';
seats['A3'] = 'Carolina';
seats['A4'] = 'Marcely';
let account = new Account(1, 'Alfredo', 2000);
account.deposit(1100);
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() { return Ride._activeRides; }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
//# sourceMappingURL=app.js.map