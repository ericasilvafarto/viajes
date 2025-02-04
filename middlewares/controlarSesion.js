import { modeloUsuario } from "../database/models/modeloUsuario.js";

export const controlarSesion = async (req, res, next) =>{
    try{
        const authHeader = req.headers["authorization"];
        if(!authHeader){
            throw {statusCode: 401, message:"No autorizado - No se envio token de sesion"} 
        }
        const usuario = await modeloUsuario.findOne({session: authHeader})

        if(usuario){
            req.usuario = usuario;
            next()
        }else{
            throw {statusCode: 401, message:"No autorizado - sesion no valida"}
        }
    }catch(error){
        next(error)
    }
}