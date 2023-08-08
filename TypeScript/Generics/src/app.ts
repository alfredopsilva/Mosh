//Generics - Reusable Types. 
// We use this technique to create customizable classes. 

// Syntax 
class KeyValuePair<K, V>{
    constructor(
        public key: K,
        public value: V
    ) { }
}

let pair = new KeyValuePair<number, string>(1, 'Alfredo')


//Generic Functions 
class ArrayUtils {

    wrapInArray<T>(value: T) {
        return [value]
    }
}

let utils = new ArrayUtils();
utils.wrapInArray(2);

// Generic Interfaces
interface Result<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string): Result<T> {
    return { data: null, error: null }
}

interface User {
    name: string
}

interface Product {
    title: string
}

let result = fetch<User>('url');
result.data?.name;

//Generic Contraints 
function echo<T extends number | string>(value: T): T {
    return value;
}

echo(2);

function echo1<T extends { name: string } | string>(value: T): T {
    return value;
}

echo1({ name: 'Alfredo' });

// Extending Generic Classes 
interface Product {
    name: string,
    price: number

}

class Store<T>{ 
    protected _objects: T[] = []; 

    add(obj: T): void { 
        this._objects.push(obj)
    }
    
}

//Pass on the generic type parameter
class CompressibleStore<T> extends Store<T>{ 
    compress(){}
}

// Restrict the generic type parameter 
class SearchableStore<T extends {name: string}> extends Store<T>{ 
    find(name: string): T | undefined{
        return this._objects.find(obj => obj.name === name)
    }
}

//Fixing the generic Type Parameter
class ProductStore extends Store<Product>{
    filterByCategory(category: string): Product[]{
        return []
    }
}

//Type Mapping 
type ReadOnly<T> = { 
    // Index Signature 
    // keyof 
    readonly [K in keyof T]: T[K]
}
