/*
OOP => One type of paradigms for programming
 */

//A class is a blueprint to creating objects ( instances ).

class Account {
    readonly id: number; 
    owner: string;
    private _balance: number;
    nickname?: string; 


    constructor(id: number, owner: string, balance: number){
        this.id = id; 
        this.owner = owner; 
        this._balance = balance; 
    }

    deposit(amount: number): void {
        if(amount <= 0)
            throw new Error("Invalid Amount");
        this._balance+= amount;
    }

    get balance(): Number {
        return this._balance; 
    }
}

class SeatAssignment {
    //This is called index signature
    [seatNumber: string]: string
}

let seats = new SeatAssignment();
seats.A1 = 'Mosh';
seats.A2 = 'Alfredo';
seats['A3'] = 'Carolina'
seats['A4'] = 'Marcely'

let account = new Account(1,'Alfredo',2000);
account.deposit(1100);
console.log(account.balance)

