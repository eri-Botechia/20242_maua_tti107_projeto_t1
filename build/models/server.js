"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = Number(process.env.PORT) || Number(3000);
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const mainRouter_1 = __importDefault(require("../router/mainRouter"));
const apiRouter_1 = __importDefault(require("../router/apiRouter"));
const usersRouter_1 = __importDefault(require("../router/api/usersRouter"));
const notebooksRouter_1 = __importDefault(require("../router/notebooksRouter"));
const docsRouter_1 = __importDefault(require("../router/docs/docsRouter"));
class Server {
    constructor() {
        this.port = port;
        this.apiPaths = {
            api: '/api',
            users: '/api/users',
            posts: '/api/posts'
        };
        this.mainPaths = {
            main: '/'
        };
        this.docsPaths = {
            docs: '/docs'
        };
        this.notebooksPaths = {
            notebooks: '/notebooks'
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
        this.app.use(this.apiPaths.api, apiRouter_1.default);
        this.app.use(this.apiPaths.users, usersRouter_1.default);
        this.app.use(this.mainPaths.main, mainRouter_1.default);
        this.app.use(this.docsPaths.docs, docsRouter_1.default);
        this.app.use(this.notebooksPaths.notebooks, notebooksRouter_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map