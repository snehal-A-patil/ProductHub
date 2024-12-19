// const express =
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
import mongoose from 'mongoose';
import productRoutes from '../Backend/routes/product.route.js'
import cors from 'cors';
import path from 'path';


dotenv.config();


const app=express();
app.use(cors());

app.use(express.json()); // allows us to accept json data 

// console.log(process.env.MONGO_URI);

const __dirname= path.resolve();

app.use('/api/products',productRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname , "/frontend/dist")));
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    });

}




app.listen(5000,()=>{
    connectDB();
    console.log("server listening at 5000 hello");

})
