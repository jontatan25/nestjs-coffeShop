import { Controller, HttpStatus } from '@nestjs/common';
import { Body, Get, HttpCode, Param, Post, Res } from '@nestjs/common/decorators';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(@Res() response) {
       response.status(200).send('This action Returns all coffees with Status 200')
    }
    @Get(':id')
    findOne(@Param('id') id:string) {
        return `This action returns #${id} Coffee`
    }
    @HttpCode(HttpStatus.GONE)
    @Post(  )
    create(@Body() body){
        return body;
    }
}
