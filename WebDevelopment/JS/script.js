let student = { 
    firstName : 'Alfredo', 
    lasName: 'Silva',
    age : 32, 
    preferredColor : 'black',
    fullName: function() {
        console.log(this.firstName + ' ' + this.lasName)
    }
}

student.fullName(); 