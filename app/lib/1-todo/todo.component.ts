import {Component, OnInit} from 'angular2/core';
import {Item} from '../models/todoitems';
//import {ItemService} from '../App/item.service';
import {TodoItemPipe} from '../App/custom.pipe'

@Component({
    selector: 'todo',
    //template: 'This is todo component',
    templateUrl:`./app/lib/1-todo/todoTemplate.html`,
    inputs:['todoItems', 'doingItems'],    
    pipes: [TodoItemPipe]  
})
export class TodoComponent implements OnInit {
    public todoItems: Item[] = [];
    public doingItems: Item[] = [];
    
    constructor() {  }
    ngOnInit() { }
    onSelect( item : Item ){
        item.stage = 2;
        this.doingItems.push(item);
        this.todoItems.splice(this.todoItems.indexOf(item, 0), 1);
    }
}


//Difference between constructor and ngOnInit:
/**********************************************
 * 
 * 
 * 
 * 
 ***********************************************/