import { ProductsManagerFiles } from "./files/productsManagerFiles.js";
import { CartsManagerFiles } from "./files/cartsManagerFiles.js";

//importamos de util.js la variable _dirname
import { _dirname } from "./util.js";
// controlamos  la ruta con un console.log
//console.log(" _dirname:", _dirname)

//importamos una libreria adicional nativa para vincular distintas rutas
import path from "path";
//console.log ("_dirname:",path.join(_dirname,"/files"));
//aca vincule la dirname con la ruta files

export const productsService = new ProductsManagerFiles(path.join (_dirname,"/files/products.json"));
export const cartsService = new CartsManagerFiles(path.join (_dirname,"/files/carts.json"));