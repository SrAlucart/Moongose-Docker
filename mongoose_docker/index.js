/*
    * @author: Emanuel Buritica
    * @date: Aug 25th, 2025
    * @description: small app to test database connection inside a docker container

*/

import express from "express";
import mongoose from "mongoose";

const Usuarios = mongoose.model('Usuarios', new mongoose.Schema({
    usuario: String,
    correo: String,
    clave: String,
}))

const app = express();

// mongoose.connect('mongodb://root:r0O7@localhost:27017/miapp?authSource=admin') /* Password: r0O7 */
mongoose.connect('mongodb://root:r0O7@monguse:27017/miapp?authSource=admin')


app.get('/', async(_req, res) => {
    console.log("listado de usuarios...");
    const usuarios = await Usuarios.find();
    return res.send(usuarios);  
})

app.get('/crear', async(_req, res) => {
    console.log("Insertando...");
    await Usuarios.create({
        'usuario': 'Emanuel Buritica Guababe',
        'correo': 'Emanuelburitica2000@gmail.com',
        'clave': '1234'
    })

    return res.send("Ok")
})

app.get('/nueva', async(_req, res) => {
    return res.send("Ruta creada desde desarrollo OK")
})


app.listen(3000, () => console.log("Escuchando el puerto: 3000"));
