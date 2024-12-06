"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBook = exports.getBooks = exports.getNotebook = exports.getNotebooks = exports.createItem = exports.getTask = exports.getTasks = exports.getIndex = void 0;
const getIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile("index.html", { root: "public" });
});
exports.getIndex = getIndex;
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile("tasks-list.html", { root: "public" });
});
exports.getTasks = getTasks;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile("task.html", { root: "public" });
});
exports.getTask = getTask;
const createItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile("create.html", { root: "public" });
});
exports.createItem = createItem;
const getNotebooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile("notebooks.html", { root: "public" });
});
exports.getNotebooks = getNotebooks;
const getNotebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile("notebook.html", { root: "public" });
});
exports.getNotebook = getNotebook;
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile("books.html", { root: "public" });
});
exports.getBooks = getBooks;
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile("book.html", { root: "public" });
});
exports.getBook = getBook;
//# sourceMappingURL=pagesController.js.map