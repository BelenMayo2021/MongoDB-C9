const mongoose = require('mongoose');
const { Schema } = require('mongoose');

//Estructura del documento en MongoDB a traves de Mongoose
const userSchema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    age: {type: Number, required: true},    
})

//Acceso a los metodos para hacer el CRUD
module.exports = mongoose.model('users', userSchema);
