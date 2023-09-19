//importamos el modulo router de express
import express, { Router } from "express";
//import { ProductManagerFiles } from "../persistence/files/productManagerFiles.js";
//const productsService = new ProductManagerFiles();

//en vez de usar las lineas 3 y 4, se creo un archivo index.js y ahi se paso la funcionalidad:

import { productsService } from "../persistence/index.js";

const router = Router();

//se crea peticion para ver que funcione la ruta

productsRouter.get("/", async (req, res) => {
  try {
    const product = await productsService.getProducts();
    res.json({ message:"listado productos" });
  } catch (error) {
    res.json({ error: error.message });
  }
});
//agregar productos:
productsRouter.post("/",async (req,res)=>{
  try{
    const productInfo = req.body;
  }catch(error){
    res.json ({status :"error",message:error.message});
  }
})
//ruta para obtener el producto por id:
productsRouter.get("/:pid", async (req, res) => {
  try {
    const productId = parseInt(req.params.pid);
const product = await productsService.getProductbyId(productId);
    res.json({ message: "endpoint para obtener un producto",data:product });
  } catch (error) {
    res.json({ status: "error",message:error.message });
  }
});
//eliminar producto:
productsRouter.delete("/:pid",async(req,res)=>{
  try {
    const productId = parseInt(req.params.pid);
    await productsService.deleteProduct(productId);
  } catch (error) {
response.send(error.message);
  }
});

export {router as productsRouter };
