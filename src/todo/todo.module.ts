import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import {AppService} from "../app.service";
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [AppService, TodoService]
})
export class TodoModule {



}
