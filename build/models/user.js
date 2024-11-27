"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const IdGenerator_1 = require("../services/IdGenerator");
class User {
    constructor(id, primeiro_nome, ultimo_nome, email, password, permanentLink, avatarImg) {
        this.id = id;
        this.primeiro_nome = primeiro_nome;
        this.ultimo_nome = ultimo_nome;
        this.email = email;
        this.password = password;
        this.permanentLink = permanentLink;
        this.avatarImg = avatarImg;
    }
    getId(id) {
        const newIdGenerator = new IdGenerator_1.IdGenerator();
        if (id === undefined) {
            const newIdGenerator = new IdGenerator_1.IdGenerator();
            this.id = newIdGenerator.generate();
        }
        else {
            this.id = id;
        }
    }
    getPermanentLink(id) {
        const linkGenerator = new IdGenerator_1.IdGenerator();
        if (this.permanentLink === undefined) {
            const newIdGenerator = new IdGenerator_1.IdGenerator();
            this.id = newIdGenerator.generate();
        }
        else {
            this.id = id;
        }
    }
    getAvatarImgUrl(avatarImg) {
        const defaultAvatarImg = "";
        if (avatarImg === null) {
            this.avatarImg = defaultAvatarImg;
        }
        else {
            this.avatarImg = avatarImg;
        }
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map