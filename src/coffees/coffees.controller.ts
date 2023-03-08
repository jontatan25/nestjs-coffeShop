import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';

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
}
