enum TASK_STATUS {
    TODO=0,
    PENDING = 1,
    IN_PROGRESS = 2,
    COMPLETED = 3
}

interface ITask {
    id: number|null;
    endpoint: string|undefined;
    title: string;
    description: string;
    status: TASK_STATUS;
    startAt: Date|null;
    updatedAt: Date|null;
    deliveryDate: Date|null;
    responsable: string|undefined;
}

interface Task2DBModel{
    id:number;
    endpoint: string;
    title: string;
    description: string;
    status: TASK_STATUS;
    start_at: Date;
    updated_at: Date;
    delivery_date: Date;
    id_users: number;
}
export class Task implements ITask{
    constructor(
        public id: number|null,
        public endpoint: string|undefined,
        public title: string,
        public description: string,
        public status: TASK_STATUS=TASK_STATUS.TODO,
        public startAt: Date|null,
        public updatedAt: Date|null,
        public deliveryDate: Date|null,
        public responsable: string|undefined
        ) {
    }
}