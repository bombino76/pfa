import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import carsRoute from "./routes/cars.js"
import placesRoute from "./routes/places.js"
import targetsRoute from "./routes/targets.js"
import carTypesRoute from "./routes/carTypes.js"
import reservationsRoute from "./routes/reservations.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()
dotenv.config()
const corsOptions = {
  origin:true,
  credentials:true
}

//function that connects to the mongoDB 
const connect = async () =>{
try {
  await mongoose.connect('mongodb://127.0.0.1:27017/carTours');
  console.log("mongo initial is connected")
} catch (error) {
  throw error;
}
};
//monitoring the DB connection status
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})


app.get("/", (req,res)=>{
    res.send("hello world!")
})

//middlewares

app.use(cookieParser())
app.use(express.json())
app.use(cors(corsOptions))
app.use("/auth",authRoute)
app.use("/cars",carsRoute)
app.use("/places",placesRoute)
app.use("/targets",targetsRoute)
app.use("/CarTypes",carTypesRoute)
app.use("/reservations",reservationsRoute)
app.use("/users",usersRoute)
app.listen(8800, ()=>{
    connect();
    console.log("backend works indeed!");
})