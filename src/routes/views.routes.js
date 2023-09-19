import {Router} from "express";

const router = Router();

router.get("/", (req,res)=>{
    res.render("Home");
});

router.get("/realtimeproducts", (req,res)=>{
    res.render("realTime");
});

export {router as viewsRouter};