import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';

@Module({
    imports: [],
    controllers: [FirstController],
    providers: [],
    exports: [],
})
export class FirstModule {}
