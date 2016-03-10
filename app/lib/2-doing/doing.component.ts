import {Component, OnInit} from 'angular2/core';
import {Item} from '../models/todoitems';
//import {ItemService} from '../App/item.service';


@Component({
    selector: 'doing',
    templateUrl: './app/lib/2-doing/doingTemplate.html',
    inputs:['doingItems', 'doneItems']  
})

export class DoingComponent implements OnInit {
    public doingItems: Item[] = [];
    public doneItems: Item[] = [];
    
    constructor() { }
    ngOnInit(){}
    onSelect( item : Item ){
        console.log(item);
        item.stage = 3;
        this.doneItems.push(item);
        this.doingItems.splice(this.doingItems.indexOf(item, 0), 1);
    }
    public onlyFirstStage(){ //: Item[] {

    }
}