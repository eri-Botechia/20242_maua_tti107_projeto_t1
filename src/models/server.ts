import dotenv from 'dotenv';
dotenv.config();
const port = Number(process.env.PORT) ||3000;

import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import mainRouter from '../routes/mainRouter';
import tasksRouter from '../routes/api/tasksRouter';
import usersRouter from '../routes/api/usersRouter';
import pagesRouter from '../routes/pages/pagesRouter';
import ticketsRouter from '../routes/api/ticketsRouter';
import apiRouter from '../routes/api/apiRouter';
import collectionsRouter from '../routes/api/collectionsRouter';
import booksRouter from '../routes/api/booksRouter';
import notebooksRouter from '../routes/api/notebooksRouter';
import notebooksPagesRouter from '../routes/pages/notebooksRouter';
import booksPagesRouter from '../routes/pages/booksRouter';
import tasksPagesRouter from '../routes/pages/tasksRouter';
import collectionsPagesRouter from '../routes/pages/collectionsRouter';
import authRouter from '../routes/auth/authRouter';

/*Esse é o modelo de servidor a ser usado em index*/ 

export class Server {
    private app: Application;
    private port: number=port;
    private pagesPaths ={
        main: '/pages',
        books: '/pages/books',
        tasks: '/pages/tasks',
        notebooks: '/pages/notebooks',
        collections: '/pages/collections'
    }
    private apiPaths = {
        api: '/api',
        users: '/api/users',
        tickets: '/api/tickets',
        tasks: '/api/tasks',
        books: '/api/books',
        notebooks: '/api/notebooks',
        collections: '/api/collections'
    };

    private userPaths = {
        users: '/users'
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
        this.app.use(this.pagesPaths.main, pagesRouter);
        this.app.use(this.pagesPaths.notebooks, notebooksPagesRouter);
        this.app.use(this.pagesPaths.books, booksPagesRouter);
        this.app.use(this.pagesPaths.tasks, tasksPagesRouter);
        this.app.use(this.pagesPaths.collections, collectionsPagesRouter);
        this.app.use(this.apiPaths.api, apiRouter);

        this.app.use(this.apiPaths.users, usersRouter);

        this.app.use(this.apiPaths.tasks,tasksRouter);

        this.app.use(this.apiPaths.tickets, ticketsRouter);

        this.app.use(this.apiPaths.books, booksRouter);

        this.app.use(this.apiPaths.notebooks, notebooksRouter);
        this.app.use(this.apiPaths.collections, collectionsRouter);
    
        this.app.use(this.userPaths.users, authRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}