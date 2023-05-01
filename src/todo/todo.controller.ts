import {Body, Controller, Get, HttpCode, NotFoundException, Param, Post, Req, Res} from '@nestjs/common';
import {Request, Response} from "express";
import {Todo, TodoStatusEnum} from "./entities/todo.entities";
import { v4 as uuidv4 } from 'uuid';

@Controller('todo')
export class TodoController {
 todos:Todo[];
    constructor() {

        this.todos=[];
    }

@Get()
    getTodos(){

        return this.todos;

    }
    @Get('/:id')
    getTodosById(@Param('id') id: string){
        const newTodo= this.todos.find(todo=>todo.id===id);
        if(!newTodo){
           throw new NotFoundException("Todo not found");
        }
        return newTodo;



    }


    @Get('get2')
    getTodos2(@Req() request: Request,
             @Res() response: Response){
        response.status(201);
        response.json({todos:"fefefefef"})
        return this.todos;

    }

    @Post()
    @HttpCode(202)
    postTodos(@Body() newTodo:Todo){
       newTodo.id=uuidv4();
        newTodo.createdAt=new Date();
        if(!newTodo.status){
            newTodo.status=TodoStatusEnum.waiting;
        }
        else newTodo.status=TodoStatusEnum[newTodo.status];
        this.todos.push(newTodo);
        return this.todos;

    }
    @Post('bodyparam')
    postTodos2(@Body('id') id,@Body('name') name,@Body('description') description,@Body('date') date,
               @Body('status') status , @Res() response: Response ,){
        console.log(id,name,description,date,status);

        return {id,name,description,date,status};

    }
    }


