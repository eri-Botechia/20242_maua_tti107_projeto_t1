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
exports.getRecovery = exports.getSignIn = exports.getSignUp = void 0;
const getSignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.sendFile('registration.html', { root: 'public' });
});
exports.getSignUp = getSignUp;
const getSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    res.sendFile('login.html', { root: 'public' });
});
exports.getSignIn = getSignIn;
const getRecovery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    res.sendFile('recovery.html', { root: 'public' });
});
exports.getRecovery = getRecovery;
//# sourceMappingURL=authController.js.map