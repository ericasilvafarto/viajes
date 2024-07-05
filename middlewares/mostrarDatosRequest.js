export const mostrarDatosRequest = (req, res, next)=>{
    console.log('\x1b[35m',"metodo:", req.method);
    console.log('\x1b[32m',"url:", req.url); 

    next()
}

