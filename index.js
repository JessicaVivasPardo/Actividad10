const mongoose = require('mongoose');
const app = require('./app');
const port =3000;


mongoose.connect ('mongodb://localhost:27017/eduBIT', {useNewUrlParser: true, useUnifiedTopology: true}, (error, res)=> {
    if(error){
        console.log('Error de conexión',error);
    }else{
        console.log('Nos correctamos correctamente');
        app.listen(port, () => {
            console.log('Escuchando en el puerto',port);
        })
    }
})
const db = mongoose.connection;
db.on('error',
    console.error.bind(console,'Error al conectarse con mongo DB'));
db.once('open',() => {
    console.log('Conectado a la dataBase EduBIT');
})
