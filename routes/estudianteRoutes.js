
const express = require('express');
const EstudianteController = require('../controllers/EstudianteController');


const api = express.Router();


api.get('/Bienvenido',(req,res) => {
    console.log('Estas en la primera ruta');
});
api.post('/',EstudianteController.create);
api.put('/:idEstudiante',EstudianteController.update);
api.delete('/:idEstudiante',EstudianteController.remove);
api.get('/allElements',EstudianteController.getAll);



module.exports = api;