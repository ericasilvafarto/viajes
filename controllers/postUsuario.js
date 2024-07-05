import { modeloUsuario } from "../database/models/modeloUsuario.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postUsuario = async (req, res, next)=>{
    const {nombre, apellido,email, password} = req.body;

    try{
        const usuarioExistente = await modeloUsuario.findOne({email: email})
        if(usuarioExistente) {
            throw new Error("El email ya esta en uso")
        }

        const nuevoUsuario = new modeloUsuario()
        nuevoUsuario.id = await obtenerProximoId(modeloUsuario)
        nuevoUsuario.nombre = nombre;
        nuevoUsuario.apellido = apellido;
        nuevoUsuario.password = password;
        nuevoUsuario.email= email;

        nuevoUsuario.save()
        .then(()=>{
            res.json({message: `Nuevo usuario con id ${nuevoUsuario.id} creado con exito.`})
        })
        .catch((error)=>{
            next(error)
        })

    } catch(error){
        next(error)
    }
}