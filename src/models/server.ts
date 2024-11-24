import dotenv from 'dotenv';
dotenv.config();
const port = Number(process.env.PORT) ||3000;

import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import mainRouter from '../routes/mainRouter';
import productsRouter from '../routes/api/productsRouter';

import apiRouter from '../routes/apiRouter';
import usersRouter from '../routes/api/usersRouter';

import docsRouter from '../routes/docs/docsRouter';

/*Esse é o modelo de servidor a ser usado em index*/ 

export class Server {
    private app: Application;
    private port: number=port;
    private mainPaths ={
        main: '/'
    }
    private apiPaths = {
        api: '/api',
        users: '/api/users',
        posts: '/api/posts',
        products: '/api/products'
    };

    private docsPaths = {
        docs: '/docs'
    };

    constructor() {
        this.app = express();
        this.port ;
        
        this.middlewares();
        this.routes();
        this.listen();
    }

    middlewares(){
        //CORS
        this.app.use(express.json());
    
        this.app.use(express.urlencoded({ extended: true }));
   
        //MORGAN
        this.app.use(morgan('dev'));

        // CORS
        this.app.use(cors());

        // BODY PARSER
        this.app.use(express.json());

        this.app.use(express.static(path.join('public')))
    }

    routes() {
        this.app.use(this.apiPaths.api, apiRouter)

        this.app.use(this.apiPaths.users, usersRouter);
        this.app.use(this.mainPaths.main, mainRouter);
        this.app.use(this.apiPaths.products,productsRouter)
        this.app.use(this.docsPaths.docs, docsRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}