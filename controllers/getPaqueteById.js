import { modeloPaquete } from "../database/models/modeloPaquete.js";

export const getPaqueteById =(req, res, next)=>{
    const idPaquete = req.params.id;
    modeloPaquete.findOne({id: idPaquete})
    .then((data)=>{
        if(!data){
            throw new Error(`No existe ningun paquete con el Id ${idPaquete}`)
        }else{
            res.json(data)
        }
    })
    .catch((error)=>{
        
        next(error)
    })

}