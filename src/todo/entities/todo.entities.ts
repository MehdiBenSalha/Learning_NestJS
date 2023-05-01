import { v4 as uuidv4 } from 'uuid';

export class Todo {
    id: uuidv4;
    name: string;
    description: string;
    status: TodoStatusEnum;
    createdAt: Date;
    }

export enum TodoStatusEnum {
    'actif'="En cours",
    'done'="Finalisé",
    'waiting'="En attente"
}
