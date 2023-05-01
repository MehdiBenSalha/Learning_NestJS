import {Controller, Get, Req, Res} from '@nestjs/common';
import {Request, Response} from "express";

@Controller('todo')
export class TodoController {
    private todos=['gg','gg'];
@Get()
    getTodos(){

        return this.todos;

    }

    @Get('get2')
    getTodos2(@Req() request: Request,
             @Res() response: Response){
        response.status(201);
        response.json({todos:"fefefefef"})
        return this.todos;

    }

}
