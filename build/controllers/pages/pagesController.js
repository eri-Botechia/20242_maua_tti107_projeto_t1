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
exports.getSearch = exports.getTools = exports.getNotebooks = exports.getContact = exports.getSlash = void 0;
const getSlash = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(301).redirect('/');
});
exports.getSlash = getSlash;
const getContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).sendFile('pages/contact.html', { root: 'public' });
    }
    catch (error) {
        console.error(error);
        throw new Error('error');
        res.send('ERROR ');
    }
});
exports.getContact = getContact;
const getNotebooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).sendFile('pages/notebooks.html', { root: 'public' });
    }
    catch (error) {
        console.error(error);
        throw new Error('error');
        res.send('ERROR ');
    }
});
exports.getNotebooks = getNotebooks;
const getTools = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).sendFile('pages/tools.html', { root: 'public' });
    }
    catch (error) {
        console.error(error);
        throw new Error('error');
        res.send('ERROR ');
    }
});
exports.getTools = getTools;
const getSearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).sendFile('pages/search.html', { root: 'public' });
    }
    catch (error) {
        console.error(error);
        throw new Error('error');
        res.send('ERROR ');
    }
});
exports.getSearch = getSearch;
//# sourceMappingURL=pagesController.js.map