import { Injectable } from '@nestjs/common';
import {Todo, TodoStatusEnum} from "./entities/todo.entities";
import {AddTodoDto} from "../dto/add-todo.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
    todos:Todo[] =[];
    addTodos(newTodo:AddTodoDto):Todo {
        const todo = new Todo();
        todo.id=uuidv4();
        todo.createdAt=new Date();
        if(!newTodo.status){
            todo.status=TodoStatusEnum.waiting;
        }
        else todo.status=TodoStatusEnum[newTodo.status];
        if(!todo.status){todo.status=TodoStatusEnum.waiting;}
        todo.name=newTodo.name;
        todo.description=newTodo.description;
this.todos.push(todo);
        return todo;
    }
    getTodos() {
        return this.todos;
    }
}
