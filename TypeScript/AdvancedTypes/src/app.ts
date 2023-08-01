let employee: {
    readonly id: number, 
    name: string, 
    retire: (date: Date) => void
} = {
    id: 1, 
    name: 'Mosh', 
    retire: (date: Date) => { 
        console.log(date)
    }
}

//Using Type Alias 
type Employee = { 
    readonly id: number, 
    name: string, 
    retire: (date: Date) => void
}

let alfredo: Employee = { 
    id: 2, 
    name: 'Alfredo',
    retire: (date: Date) => console.log(date),
}

//Union Types
function kgToLbs(weight: number | string){ 
    const ratio: number = 2.20462;
    if(typeof weight === 'string')
        console.log(Number.parseFloat(weight) * ratio);
    else 
        console.log(weight * ratio)
}

kgToLbs(20)

//Intersection
type Draggable = { 
    drag: () => void, 
}

type Resizable = { 
    resize: () => void, 
}

type UIWidget = Draggable & Resizable; 

let textBox: UIWidget = { 
    drag: () => {},
    resize: () => {}
}

//Literal Types 
type Quantity = 50 | 100; 
let quantity: Quantity = 50;

//Nullable Types 
function gree(name: string){
    console.log(name.toUpperCase)
}

//Optional Chaining