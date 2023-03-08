import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll() {
        return 'This action return all Coffees'
    }
}
