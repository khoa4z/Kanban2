import {Component, OnInit} from 'angular2/core';
import {InputComponent} from '../0-input/input.component';
import {TodoComponent}  from '../1-todo/todo.component';
import {DoingComponent} from '../2-doing/doing.component';
import {DoneComponent}  from '../3-done/done.component';

import {ItemService} from '../App/item.service';

import {Item} from '../models/todoitems';

import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'my-app',
    templateUrl : `./app/lib/App/AppTemplate.html`, //Wierd HA
    directives: [InputComponent, TodoComponent, DoingComponent, DoneComponent, Dragula],
    providers: [ItemService],
    viewProviders:[DragulaService]
})
export class AppComponent implements OnInit {
    public title = 'Kanban';  
    //public items: Item[] = []; 
    public todoItems: Item[] =[];
    public doingItems: Item[] =[];
    public doneItems: Item[] =[];
    //public mydragula: Dragula;
    
    constructor(private _itemService: ItemService, public dragulaService: DragulaService) {  }
    ngOnInit() { 
        //@todo: need to reconfigure
        this._itemService.getItems().then(items => this.todoItems = items); //change from Angular2.0.8 to 2.0.9
        //this.todoItems = this._itemService.getItems();
        
        
        //this._itemService.getItemsForStage().then(items => this.items = items);
        //this.onlyFirstStage();
    }
}


