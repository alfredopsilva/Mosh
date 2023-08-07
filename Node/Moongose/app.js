// Require and Import Mongoose
const boolean = require('joi/lib/types/boolean');
const mongoose = require('mongoose');

//Connecting Mogoose - this connection will return a promisse. 
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connect to MongoDB...'))
    .catch((err) => console.log('Connection Error...', err))


/*
We use an schema in Mongoose ( it's not part from MongoDB ). They're used to define a shape of documents in MongoDB Collection, it means, they
are used to define what properties we will have in that document. 

Schema Types :
String, 
Number, 
Date, 
Buffer => stores binary data
Boolean, 
ObjectID, 
Array
*/

//Creating a Schema 
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})

// Creating a Class with this Schema
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    // Creating this Object with the previous Class. 
    const course = new Course({
        name: 'Angular Course',
        author: 'Mosh',
        tags: ['Angular', 'FrontEnd', 'JavaScript'],
        isPublished: true
    })

    //Asynchronous Operation 
    const result = await course.save();
    console.log("ID => ", result)
}

// Retrieving Documents
async function getCourses(){

    // Comparison Operators
    // eq = equal 
    // ne = not equals
    // gt greater than 
    // gte greater than or equal to 
    // lt => less than 
    // lte
    // in 
    // nin 


    const courses = await Course
        .find({author: 'Alfredo'})
        .limit(10)
        .sort({name: 1});
        
    console.log(courses)
}

getCourses(); 