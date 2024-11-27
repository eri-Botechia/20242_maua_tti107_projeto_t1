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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.putItem = exports.postItem = exports.getItem = exports.getAll = exports.getNotebooks = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getNotebooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const readStream = fs_1.default.readFileSync(path_1.default.join(__dirname, './../../JSON', 'reportNotebooks.json'), 'utf-8');
        const readFile = JSON.parse(readStream);
        console.log(readFile);
        res.status(200).json({ message: 'notebooks', result: readFile });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error reading file' });
    }
});
exports.getNotebooks = getNotebooks;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: 'LIST' });
});
exports.getAll = getAll;
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    res.status(200).json({ message: 'ITEM', id: id });
});
exports.getItem = getItem;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    res.status(201).json({ message: 'CREATE', body });
});
exports.postItem = postItem;
const putItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    res.status(200).json({ message: 'ITEM Updated', body });
});
exports.putItem = putItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: 'ITEM DELETE' });
});
exports.deleteItem = deleteItem;
//# sourceMappingURL=notebooksController.js.map