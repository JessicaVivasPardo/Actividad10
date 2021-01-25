
const mongoose = require('mongoose');
const Estudiante = require('../models/Estudiante');



function create(req,res){
    var estudiante = new Estudiante();
    var params = req.body; 

    estudiante.nombre = params.nombre;
    estudiante.apellido = params.apellido;
    estudiante.edad = params.edad;
    estudiante.correo = params.correo;
    estudiante.direccion = params.direccion;
    estudiante.telefono = params.telefono;

    estudiante.save((error,estudianteCreated)=>{
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })}else {
                if(!estudianteCreated){
                    res.status(400).send({
                        statusCode:400,
                        message:"Error al insertar el estudiante"
                    })
                }else{
                    res.status(200).send({
                        statusCode:200,
                        message: "Estudiante ingresado con éxito",
                        dataEstudiante: estudianteCreated
                    })
                
            }

        }
    })

}

function update(req,res){
    var parameters = req.body;
    var idEstudiante = req.params.idEstudiante;

    Estudiante.findByIdAndUpdate( idEstudiante, parameters, (error,estudianteUpdated)=>{
        if(error){
            res.status(500).send({

                statusCode: 500,
                message: "Error en el servidor"

            })
        }else{
            if(!estudianteUpdated){
                res.status(400).send({
                    statusCode:400,
                    message:"Error al actualizar la infomación"
                })
            }else{
                res.status(200).send({
                    statusCode:200,
                    message: "Estudiante actualizado con éxito"
                })
            }
        }
    })
}

function remove(req,res){
    var idEstudiante = req.params.idEstudiante;

    Estudiante.findByIdAndDelete(idEstudiante, (error,estudianteRemoved)=>{
        if(error){
            res.status(500).send({
                statusCode: 500,
                message:"Error en el servidor"
            })
        }else{
            if(!estudianteRemoved){
                res.status(400).send({
                    statusCode: 400,
                    message:"Error al eliminar el estudiante"
                })
            }else{
                res.status(200).send({
                    statusCode:200,
                    message:"Estudiante eliminado correctamente"
                })
            }
        }

    })
    
}
function getAll(req,res){

    Estudiante.find({},(error,allElements)=>{
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })

        }else{
            res.status(200).send({
                statusCode:200,
                message:"Todos los elementos",
                allElements: allElements
            })

        }
    })
}

module.exports = {
    create,
    update,
    remove,
    getAll
}

