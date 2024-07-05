
export const formatearFiltrosDB = (valor) => {
    if (!valor) return null;
    return new RegExp(valor, "gi");
};


export const obtenerProximoId = async (modelo) => {
    const ultimoId =await modelo.findOne().sort("-id").exec();
    return ultimoId ? ultimoId.id +1 :1;
}