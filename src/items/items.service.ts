import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items: Item[]=[
        {
            id:"355545454656",
            name:"Item One",
            qty:12,
            description:"This is Item One"
        },
        {
            id:"4755s45454656",
            name:"Item Two",
            qty:15,
            description:"This is Item two"
        }
    ];

    findAll():Item[]{
        return this.items;
    }

    findOne(id):Item{
        return this.items.find(item=> item.id===id)
    }
}
