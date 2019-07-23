import { ItemsService } from './items.service';
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import {CreateItemDto} from './dto/create-item.dto';
import {Item} from './interfaces/item.interface'

@Controller('items')
export class ItemsController {

    constructor(public readonly itemsService:ItemsService){}

    @Get()
     findAll():Promise<Item[]>{
        return this.itemsService.findAll();
    }

    @Get(':id')
     findOne(@Param() param):Promise<Item>{
        return this.itemsService.findOne(param.id);
    }

    @Post()
    create(@Body() createItemDto:CreateItemDto):Promise<Item>{
        //return `Name: ${createItemDto.name} and Description: ${createItemDto.description}`;
        return this.itemsService.create(createItemDto);
    }
    @Delete(':id')
     delete(@Param('id') id):Promise<Item>{
        return this.itemsService.delete(id);
    }

    @Put(':id')
     update(@Body() updateItemDto:CreateItemDto,@Param('id') id):Promise<Item>{
        return this.itemsService.update(id,updateItemDto);
    }
}
