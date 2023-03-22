// import { sign } from "jsonwebtoken";
// import { serialize } from "cookie";
var cookie = require('cookie');
var jwt = require('jsonwebtoken');
import { FindData } from "../../../crud/crud.ts"
// import {FindData} from "@/crud"

export default async function loginHandler(req, res) {
    // console.log(req.body)
    const { email, password } = req.body

    if (email == "" || password=="") {
        console.log("Mensajes vacios");
        return res.status(401).json({error: 'Mensajes vacios'})
    }
    // check if email and password are valid
    let querys = {"email":email}
    let proyect = "agenda"
    let collection = "USERS" 
    let result = await FindData(querys, proyect, collection)
    // console.log(result);
    
    // if (result === []) {
    //     console.log("Vacio");
    //     return res.status(401).json({error: 'No se encontraron usuarios con este correo'})        
    // }
    // if email exists, check if password is correct
    try {
        if (result[0].email !== email) {
            console.log("No hay usario con: " + email);
            return res.status(401).json({error: 'invalid email'})
        }        
    } catch (error) {
        console.log("No existe este Email");
        return res.status(401).json({error: 'No existe este Email'})        
    }

    // if password is correct

    if (email == result[0].email && password === result[0].password) {
        console.log("!!!!! CONFIRMED  !!!!!")
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),  //seg min hora dia
            email: result[0].email,
            username: result[0].username,
            proyect: "agenda"
        }, 'secret')

        const serialized = cookie.serialize('myTokenName', token, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === 'production',
            // sameSite: 'strict',
            Secure: false,
            SameSite: "None",
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: '/'
        })

        res.setHeader('Set-Cookie', serialized)
        return res.json('login succesfully')
    } 

    return res.status(401).json({error: 'invalid email or password'})
}