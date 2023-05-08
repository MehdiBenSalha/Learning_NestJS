import {TodoStatusEnum} from "../todo/entities/todo.entities";

export class AddTodoDto{
    name: string;
    description: string;
    status: TodoStatusEnum;
}