const p = new Promise((resolve,reject)=> { 
    //Async Work
    setTimeout(()=>{
        // resolve(1); 
        reject(new Error("Error"));
    },  3000);

})

p
    .then(result => console.log(result))
    .catch(err => console.log("Error", err.message))