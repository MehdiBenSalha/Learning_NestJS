import {Controller, Delete, Get, Post, Put} from '@nestjs/common';

@Controller('first')
export class FirstController {
    @Get()
    getHello(): string {
        return 'Hello World!';
    }
    @Post()
    postHello(): string {
        console.log('Post Hello World!');
        return 'Post Hello World!';
    }
    @Delete()
    deleteHello(): string {
        console.log('Delete Hello World!');
        return 'Delete Hello World!';
    }
    @Put()
    putHello(): string {
        console.log('Put Hello World!');
        return 'Put Hello World!';
    }
}
