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
exports.deleteItem = exports.putItem = exports.postItem = exports.getItem = exports.getIndex = void 0;
const tasksData_json_1 = __importDefault(require("./../../JSON/tasksData.json"));
const getIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tasksData_json_1.default;
    res.status(200).json({ message: 'LIST', result });
});
exports.getIndex = getIndex;
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    console.log(id);
    console.log(tasksData_json_1.default.result);
    const order = Number(id) - 1;
    const item = yield tasksData_json_1.default.result[order];
    res.status(200).json({ message: 'ITEM ', result: item });
});
exports.getItem = getItem;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const semestre = req.body.inputSemestre;
    const anoCursado = req.body.inputAnoCursado;
    const titulo = req.body.inputTitulo;
    const professor = req.body.inputProfessor;
    const key1_slides = req.body.inputKey1 || undefined;
    const key2_books = req.body.inputKey2 || undefined;
    const key3_notebooks = req.body.inputKey3 || undefined;
    const nroAula = req.body.inputNroAula;
    const checkKeysEmptyAndSetKeys = (keys) => __awaiter(void 0, void 0, void 0, function* () {
        const filteredKeys = keys.filter(key => key !== undefined);
        return filteredKeys;
    });
    const keys = yield checkKeysEmptyAndSetKeys([key1_slides, key2_books, key3_notebooks]);
    const tax = (keys) => __awaiter(void 0, void 0, void 0, function* () {
        let tax = 0;
        if (keys.length === 2) {
            tax = 1;
            return tax;
        }
        else if (keys.length === 1) {
            tax = 2;
            return tax;
        }
        else if (keys.length === 0) {
            tax = 3;
            return tax;
        }
        else {
            tax = 0;
            return tax;
        }
    });
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
//# sourceMappingURL=tasksController.js.map