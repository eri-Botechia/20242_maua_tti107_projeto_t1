"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var TASK_STATUS;
(function (TASK_STATUS) {
    TASK_STATUS[TASK_STATUS["TODO"] = 0] = "TODO";
    TASK_STATUS[TASK_STATUS["PENDING"] = 1] = "PENDING";
    TASK_STATUS[TASK_STATUS["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    TASK_STATUS[TASK_STATUS["COMPLETED"] = 3] = "COMPLETED";
})(TASK_STATUS || (TASK_STATUS = {}));
class Task {
    constructor(id, endpoint, title, description, status = TASK_STATUS.TODO, startAt, updatedAt, deliveryDate, responsable) {
        this.id = id;
        this.endpoint = endpoint;
        this.title = title;
        this.description = description;
        this.status = status;
        this.startAt = startAt;
        this.updatedAt = updatedAt;
        this.deliveryDate = deliveryDate;
        this.responsable = responsable;
    }
}
exports.Task = Task;
//# sourceMappingURL=task.js.map