import { ItemsService } from './items.service';
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import {CreateItemDto} from './dto/create-item.dto';
import {Item} from './interfaces/item.interface'

@Controller('items')
export class ItemsController {

    constructor(public readonly itemsService:ItemsService){}

    @Get()
    findAll():Item[]{
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param):Item{
        return this.itemsService.findOne(param.id);
    }

    @Post()
    create(@Body() createItemDto:CreateItemDto):string{
        return `Name: ${createItemDto.name} and Description: ${createItemDto.description}`;
    }
    @Delete(':id')
    delete(@Param('id') id):string{
        return `Delete ${id}`;
    }

    @Put(':id')
    update(@Body() updateItemDto:CreateItemDto,@Param('id') id):string{
        return `update ${id} : Name: ${updateItemDto.name}`;
    }
}
