import express from "express";
//importamos la variable dirname donde esta la ruta para referenciar todos los archivos y carpetas del proyecto(la creamos en utils.js)
import { _dirname } from "./util.js";
import path from "path";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import { productsService } from "./persistence/index.js";

import { viewsRouter } from "./routes/views.routes.js";

//una vez creadas las rutas las importamos con los alias creados, no olvidar la extension de las rutas
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";

const port = 8080;

const app = express();

//midleware:
app.use(express.static(path.join(_dirname,"/public")));

 const httpServer = app.listen(8080,()=> console.log(`Servidor funcionando en el puerto ${port}`));
//el servidor se guarda en una variable, servidor http
//configuracion de handlebars, y con la variable crear el nuevo servidor websocket:

const io = new Server(httpServer);

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(_dirname,"/views"));

app.use(express.urlencoded({extended:true}));

//ahora vinculamos las rutas al servidor:(metodo use con la ruta principal)
app.use(viewsRouter);
app.use("/api/products",productsRouter);//primer parametro,rutaprincipal, segundo parametro, route creada con su alias
app.use("/api/carts",cartsRouter);

//socket server
io.on("connection", async(socket)=>{
    console.log ('cliente conectado');
const products = await productsService.getProducts();
socket.emit("productsArray",products)
});