let sales: number = 1_234_567_89; 
let couse: string = 'TypeScript'; 
let is_published: boolean = true; 

//Declaring an Array 
let numbers: number[] = [1,2,3]; 

//Tuples
let user: [number,string] = [1, 'Alfredo']
user.push(3);
console.log(user)

//Enums
let small = 1; 
const medium = 2; 
const large = 3;

const enum Size { 
    Small, 
    Medium, 
    Large
}

let mySize: Size = Size.Medium;
console.log(mySize);

// Functions 

function calculateTax(income: number, taxYear: number = 2022): number{
    if(taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(200_000, 2020);

let employee: {
    readonly id: number, 
    name: string, 
    retire: (date: Date) => void} =  { 
        id: 1, 
        name: 'Alfredo',
        retire: (date)};

