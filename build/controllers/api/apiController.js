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
exports.getMain = void 0;
const endpoints_json_1 = __importDefault(require("./../../JSON/endpoints.json"));
const getMain = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(endpoints_json_1.default);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
exports.getMain = getMain;
//# sourceMappingURL=apiController.js.map