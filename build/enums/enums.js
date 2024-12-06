"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEM_CATEGORY = exports.POST_CATEGORIES = exports.ROLES = void 0;
var ROLES;
(function (ROLES) {
    ROLES["ROLE_1"] = "idealizador";
    ROLES["ROLE_2"] = "admin";
    ROLES["ROLE_3"] = "voluntario_geral";
    ROLES["ROLE_4"] = "voluntario_especifico";
    ROLES["ROLE_5"] = "cadastrado";
})(ROLES || (exports.ROLES = ROLES = {}));
var POST_CATEGORIES;
(function (POST_CATEGORIES) {
    POST_CATEGORIES["BLOG"] = "BLOG";
    POST_CATEGORIES["EVENTOS"] = "EVENTOS";
    POST_CATEGORIES["COMENTARIO"] = "COMENTARIO";
    POST_CATEGORIES["PRODUTO"] = "PRODUTO";
    POST_CATEGORIES["GALERIA"] = "GALERIA";
})(POST_CATEGORIES || (exports.POST_CATEGORIES = POST_CATEGORIES = {}));
var ITEM_CATEGORY;
(function (ITEM_CATEGORY) {
    ITEM_CATEGORY[ITEM_CATEGORY["PRESENTATION"] = 1] = "PRESENTATION";
    ITEM_CATEGORY[ITEM_CATEGORY["NOTEBOOK"] = 2] = "NOTEBOOK";
    ITEM_CATEGORY[ITEM_CATEGORY["BOOK"] = 3] = "BOOK";
    ITEM_CATEGORY[ITEM_CATEGORY["TASK"] = 4] = "TASK";
    ITEM_CATEGORY[ITEM_CATEGORY["COLLECTION"] = 5] = "COLLECTION";
    ITEM_CATEGORY[ITEM_CATEGORY["BACKPACK"] = 6] = "BACKPACK";
})(ITEM_CATEGORY || (exports.ITEM_CATEGORY = ITEM_CATEGORY = {}));
//# sourceMappingURL=enums.js.map