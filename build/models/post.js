"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const IdGenerator_1 = require("../services/IdGenerator");
class Post {
    constructor(id, imgUrl) {
        this.id = this.getId(id);
        this.imgUrl = this.getImgUrl(imgUrl);
    }
    getId(id) {
        const idGenerator = new IdGenerator_1.IdGenerator();
        this.id = idGenerator.generate();
        return this.id;
    }
    getImgUrl(imgUrl) {
        const defaultImgUrl = "https://i.ibb.co/WP3fz4c/avatar001.png";
        if (imgUrl === undefined || imgUrl == null || imgUrl == "") {
            this.imgUrl = defaultImgUrl;
            return this.imgUrl;
        }
        else {
            const imgDefault = defaultImgUrl;
            this.imgUrl = imgDefault;
            return this.imgUrl;
        }
    }
}
exports.Post = Post;
//# sourceMappingURL=post.js.map