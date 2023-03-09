import { Injectable } from '@nestjs/common';
import { Coffee } from './entitites/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
       {
            id: 1,
            name: "Latte",
            brand: "OMA",
            flavors: ['chocolate','vanilla'],
        }
    ]
    
    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        return this.coffees.find(c => c.id === +id)
    }

    create(createcoffeeDto: any){
        this.coffees.push(createcoffeeDto);
    }

    update(id: string, updateCoffeeDto: any){
        const existingCoffee = this.findOne(id);
        if(existingCoffee){
            //update coffee
        }
    }
    remove(id:string){
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id)
        if(coffeeIndex !== -1){
            this.coffees.splice(coffeeIndex,1 )
        }
    }
}