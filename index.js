import express from "express"
import "dotenv/config"
import cors from "cors"
import { conectarDB } from "./database/conexion.js";
import { getPaquete } from "./controllers/getPaquete.js";
import { mostrarDatosRequest } from "./middlewares/mostrarDatosRequest.js";
import { manejadorErrores } from "./middlewares/manejadorErrores.js";
import { getPaqueteById } from "./controllers/getPaqueteById.js";
import { postPaquete } from "./controllers/postPaquete.js";
import { putPaquete } from "./controllers/putPaquete.js";
import { delatePaquete } from"./controllers/delatePaquete.js";
import { postUsuario } from "./controllers/postUsuario.js";
import { loginUsuario } from "./controllers/loginUsuario.js";
import { controlarSesion } from "./middlewares/controlarSesion.js";
import { logoutUsuario } from "./controllers/logoutUsuario.js";





const app = express();
const port = 3000;
app.use(express.json());
app.use(cors())
await conectarDB();
 

 app.use(mostrarDatosRequest)


app.get("/", (req, res)=>{
    res.send("Api Paquetes")
})


app.post("/registrar", postUsuario)
app.post("/login", loginUsuario)



app.use(controlarSesion)



app.post("/logout", logoutUsuario)
app.get("/paquetes", getPaquete)
app.get("/paquete/:id", getPaqueteById)
app.post("/paquete", postPaquete)
app.put("/paquete/:id", putPaquete)
app.delete("/paquete/:id", delatePaquete)





app.use(manejadorErrores)

app.listen(port, ()=>{
    console.log(`Servidor corriendo en puerto ${port}`)
} )