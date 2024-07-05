import { modeloPaquete } from "../database/models/modeloPaquete.js";

export const putPaquete = (req, res, next) =>{
    const idPaquete = req.params.id;
    
    const {destino, hotel, noches, dias, precio} = req.body;
    const datosNuevos = {};
    if(destino) datosNuevos.destino = destino;
    if(hotel) datosNuevos.hotel = hotel;
    if(noches) datosNuevos.noches = noches;
    if(dias) datosNuevos.dias = dias;
    if(precio) datosNuevos.precio = precio;


    modeloPaquete.updateOne({id: idPaquete}, datosNuevos)
    .then((data)=>{
        if(data.matchedCount === 0){
            throw new Error(`No exite paquete con el ID ${idPaquete}`)
        }
        res.json({
            message: `Paquete con id ${idPaquete} modificada con exito`
        })
    })
    .catch((error)=>{
        next(error)
    })
}