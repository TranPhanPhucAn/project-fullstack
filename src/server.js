import express from 'express';
import bodyParser from 'body-parser';
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from './config/connectDB';
let app = express();
import 'dotenv/config'

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);
connectDB();
let port = process.env.PORT;
app.listen(port, () => {
    console.log(`app listen on port ${port}`)
})