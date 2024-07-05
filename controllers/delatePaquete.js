import { modeloPaquete } from "../database/models/modeloPaquete.js";

export const delatePaquete =(req, res, next) =>{
    const idPaquete = req.params.id;
    modeloPaquete.deleteOne({id: idPaquete})
    .then((data)=>{
        if(data.deletedCount !== 1){
            throw new Error(`No existe ninguna paquete con el id ${idPaquete}`)
        }else{
            res.json({
                message: `Paquete con id ${idPaquete} eliminada con exito`
            })
        }
    })
    .catch((error)=>{
        next(error)
    })
}
