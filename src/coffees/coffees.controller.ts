import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common/decorators';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll() {
        return 'This action returns all Coffees'
    }
    @Get(':id')
    findOne(@Param('id') id:string) {
        return `This action returns #${id} Coffee`
    }
    @Post()
    create(@Body() body){
        return body;
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return `This action updates #${id} Coffee`;
    }
    @Delete(':id')
    remove(@Param('id') id: string){
        return `This action removes #${id} Coffee`;
    }
}
