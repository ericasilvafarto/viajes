import { modeloPaquete } from "../database/models/modeloPaquete.js";
import { formatearFiltrosDB } from "../utils/functions.js";

export const getPaquete = (req, res, next) => { 
    const filtroDestino = formatearFiltrosDB(req.query.destino);
    const filtroHotel = formatearFiltrosDB(req.query.hotel);
    const filtroNoches = req.query.noches ? Number(req.query.noches) : null; 

    const filtros = {};
    if (filtroDestino) filtros.destino = filtroDestino;
    if (filtroHotel) filtros.hotel = filtroHotel;
    if (filtroNoches !== null && !isNaN(filtroNoches)) filtros.noches = filtroNoches; 

    modeloPaquete.find(filtros)
        .then((data) => {
            console.log("get paquete =>", data);
            if (data.length === 0) {
                res.json([]);
            } else {
                res.json(data);
            }
        })
        .catch((error) => {
            next(error);
        });
};
