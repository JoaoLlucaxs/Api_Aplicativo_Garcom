import  express, { json }  from 'express';
import path from 'node:path';
import mongoose from 'mongoose';
import {router} from './router';


mongoose.connect('mongodb://localhost:27017')
  .then(()=>{
    const port=3001;
    const app=express();
    app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')));

    app.use(json());
    app.use(router);
    app.listen(port,()=>{console.log('Servidor rodando');
    });
  })
  .catch(()=> console.log('Error'));


