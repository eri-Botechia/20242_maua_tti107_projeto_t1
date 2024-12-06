"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = Number(process.env.PORT) || 3000;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const tasksRouter_1 = __importDefault(require("../routes/api/tasksRouter"));
const usersRouter_1 = __importDefault(require("../routes/api/usersRouter"));
const pagesRouter_1 = __importDefault(require("../routes/pages/pagesRouter"));
const ticketsRouter_1 = __importDefault(require("../routes/api/ticketsRouter"));
const apiRouter_1 = __importDefault(require("../routes/api/apiRouter"));
const collectionsRouter_1 = __importDefault(require("../routes/api/collectionsRouter"));
const booksRouter_1 = __importDefault(require("../routes/api/booksRouter"));
const notebooksRouter_1 = __importDefault(require("../routes/api/notebooksRouter"));
const notebooksRouter_2 = __importDefault(require("../routes/pages/notebooksRouter"));
const booksRouter_2 = __importDefault(require("../routes/pages/booksRouter"));
const tasksRouter_2 = __importDefault(require("../routes/pages/tasksRouter"));
const collectionsRouter_2 = __importDefault(require("../routes/pages/collectionsRouter"));
const authRouter_1 = __importDefault(require("../routes/auth/authRouter"));
class Server {
    constructor() {
        this.port = port;
        this.pagesPaths = {
            main: '/pages',
            books: '/pages/books',
            tasks: '/pages/tasks',
            notebooks: '/pages/notebooks',
            collections: '/pages/collections'
        };
        this.apiPaths = {
            api: '/api',
            users: '/api/users',
            tickets: '/api/tickets',
            tasks: '/api/tasks',
            books: '/api/books',
            notebooks: '/api/notebooks',
            collections: '/api/collections'
        };
        this.userPaths = {
            users: '/users'
        };
        this.app = (0, express_1.default)();
        this.port;
        this.middlewares();
        this.routes();
        this.listen();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static(path_1.default.join('public')));
    }
    routes() {
        this.app.use(this.pagesPaths.main, pagesRouter_1.default);
        this.app.use(this.pagesPaths.notebooks, notebooksRouter_2.default);
        this.app.use(this.pagesPaths.books, booksRouter_2.default);
        this.app.use(this.pagesPaths.tasks, tasksRouter_2.default);
        this.app.use(this.pagesPaths.collections, collectionsRouter_2.default);
        this.app.use(this.apiPaths.api, apiRouter_1.default);
        this.app.use(this.apiPaths.users, usersRouter_1.default);
        this.app.use(this.apiPaths.tasks, tasksRouter_1.default);
        this.app.use(this.apiPaths.tickets, ticketsRouter_1.default);
        this.app.use(this.apiPaths.books, booksRouter_1.default);
        this.app.use(this.apiPaths.notebooks, notebooksRouter_1.default);
        this.app.use(this.apiPaths.collections, collectionsRouter_1.default);
        this.app.use(this.userPaths.users, authRouter_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map