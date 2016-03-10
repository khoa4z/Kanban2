import {Component, OnInit} from 'angular2/core';
import {InputComponent} from '../0-input/input.component';
import {TodoComponent}  from '../1-todo/todo.component';
import {DoingComponent} from '../2-doing/doing.component';
import {DoneComponent}  from '../3-done/done.component';
import {ItemService} from '../App/item.service';
import {Item} from '../models/todoitems';

@Component({
    selector: 'my-app',
    //template: '<h1>#ShietGettingReal</h1>',
    //templateUrl: './app/AppTemplate.html',
    templateUrl : `./app/lib/App/AppTemplate.html`, //Wierd HA
    directives: [InputComponent, TodoComponent, DoingComponent, DoneComponent],
    providers: [ItemService]
})
export class AppComponent implements OnInit {
    public title = 'Kanban';  
    //public items: Item[] = []; 
    public todoItems: Item[] =[];
    public doingItems: Item[] =[];
    public doneItems: Item[] =[];
    
    constructor(private _itemService: ItemService) {  }
    ngOnInit() { 
        this._itemService.getItems().then(items => this.todoItems = items);
        //this._itemService.getItemsForStage().then(items => this.items = items);
        //this.onlyFirstStage();
    }
  
    
    
    // public onlyFirstStage(){ //: Item[] {
    //     console.log("inside onlyFirstStage");
    //     console.log(this.items.length);
        
    //     var firstItem: Item[] = [];
    //     firstItem = new Array(100);
    //    // firstItem = new Item[this.items.length];
    //     var num: number = 6;
        
    //     for(var i = 0; i<this.items.length; i++){
    //         if(this.items[i].stage == 1){
    //             console.log("Push Item: " + this.items[i].id);
    //             firstItem.push(this.items[i]);
    //             //firstItem[0] = this.items[i];
    //         }
    //     }
    //     //firstItem
    //     console.log("firstItem"); 
    //     console.log(firstItem); 
        
    //     //this.items1 = firstItem;
        
    //     //return this.items;
    //     //return firstItem;
    // }
}


