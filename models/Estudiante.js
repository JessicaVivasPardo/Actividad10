
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EstudianteSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    correo: String,
    direccion: String,
    telefono: Number
});

module.exports = mongoose.model('Estudiante',EstudianteSchema);


