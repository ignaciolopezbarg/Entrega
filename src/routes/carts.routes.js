import express, { Router } from "express";
import { cartsService } from "../persistence/index.js";
import { productsService } from "../persistence/index.js";
const router = Router();
export const cartsRouter = Router();
//recibimos info en formato json
cartsRouter.use(express.json);

//se crea peticion para ver que funcione la ruta

cartsRouter.get("/", async (req, res) => {
  try {
    const carts = await cartsService.getCarts();
    res.json({ data: carts });
  } catch (error) {
    res.json({ error: error.message });
  }
});

cartsRouter.post("/", async (req, res) => {
  try {
    const cartCreate = await cartsService.createCart();
    res.json({ data: cartCreate });
  } catch (error) {
    res.json({error:error.message})
  }
});

cartsRouter.post("/", async(req,res)=>{
  try{
    const cartCreate = await cartsService.createCart();
    res.json({data:cartCreate});
  } catch (error){
    res.json({error:error.message});
  }
});
//Listado de los prods, en cada cartId:
cartsRouter.get("/:cid",async (req,res)=>{
  try{
    const cartId = parseInt(req.params.cid)
    const getCartById = await cartsService.getCartById(cartId);
    res.send(getCartById)
  }catch(error){
    res.json({error:error.message});
  }
});
//agregamos prods al arreglo products del carro:
cartsRouter.post("cid/product/:pid",async (req,res)=>{
  try{
    const cartId = parseInt(req.params.cid);
    const productId = parseInt(req.params.pid);

    const log = await cartsService.addProductInCart(cartId,productId);
console.log(log);
  } catch (error){
    res.json({error:error.message});
  }
});




