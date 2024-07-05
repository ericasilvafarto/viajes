import { modeloUsuario } from "../database/models/modeloUsuario.js";

export const loginUsuario = async (req, res, next) =>{
    const {email, password} = req.body;
    const usuario = await modeloUsuario.findOne({email, password})
    if(usuario){
        usuario.session = Math.random().toString(36).slice(2);
        usuario.save()
        .then(()=>{
            res.json({session: usuario.session, user: usuario})
        })
        .catch((error)=> {
            next(error)
        })
    }else{
        next(new Error("Usuario o contraseña incorrecta"))
    }
}