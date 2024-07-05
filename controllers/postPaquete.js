import { modeloPaquete } from "../database/models/modeloPaquete.js";
import { obtenerProximoId } from "../utils/functions.js";


export const postPaquete=async (req, res, next)=>{
    const {destino, hotel, noches, dias, precio} = req.body;
    const nuevoPaquete = new modeloPaquete();
    nuevoPaquete.id =await obtenerProximoId(modeloPaquete)
  nuevoPaquete.destino = destino;
  nuevoPaquete.hotel= hotel;
  nuevoPaquete.noches = noches;
  nuevoPaquete.dias = dias;
  nuevoPaquete.precio= precio;

    nuevoPaquete.save()
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        next(error)
    })

}