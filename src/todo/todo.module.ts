import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';

@Module({
  controllers: [TodoController]
})
export class TodoModule {

     id: string;
     name: string;
        description: string;
        date: Date;
        status:TodoStatusEnum;

}
export enum TodoStatusEnum {
  'actif'="En cours",
  'done'="Finalisé",
  'waiting'="En attente"
}
