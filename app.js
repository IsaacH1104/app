const mongoose = require('mongoose')
const url_bd = 'mongodb://127.0.0.1:27017/';

mongoose.connect(url_bd)
.then(() => {
    console.log('Conexion exitosa en la base de datos')
})
.catch ((err) => {
    console.log('No funciono')
})

const alumnos_esquema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        apepat:{
            type:String
        },
        apemat:{
            type:String
        },
        numerotel:{
            type:Number
        }
    }
)
const alumnos = new mongoose.model('Tabla de registros de estudiantes', alumnos_esquema)

alumnos.create(
    {
        name: 'Hanah',
        apepat: 'Barajas',
        apemat: 'Quiroz',
        numerotel: 4493854938
    }
)