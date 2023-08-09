//Decorators 
function Component(constructor: Function){
    console.log("Component Decorator Called"); 
    constructor.prototype.uniqueId = Date.now(); 
    constructor.prototype.insertInDom = () => { 
        console.log("Inserting Component in the DOM.")
    }
}

//Inheritance
class ClassComponent{ 
    insertInDom(){}
}

@Component
class ProfileComponent extends ClassComponent {

}

//Parameterised Decorators
function SecondComponent(value: Number){
    
}