import { Server } from 'http';
import express from 'express';
import dotenv from "dotenv";
import database from "./config/database";
import AllRoutes from './routes/index';


const app: express.Application = express();

let server: Server;
dotenv.config();
app.use(express.json())

database();
AllRoutes(app);


server = app.listen(process.env.PORT, () => {
    console.log(`App is listen on port ${process.env.PORT}`);
  })
  
  process.on('unhandledRejection', (err: Error) => {
    console.error(`unhandledRejection ${err.name} | ${err.message}`);
    server.close(() => {
      console.error('shutting the application down');
      process.exit(1);
    });
});