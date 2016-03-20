import {Component, OnInit} from 'angular2/core';
import {Item} from '../models/todoitems';

@Component({
    selector: 'done',
    templateUrl: './app/lib/3-done/doneTemplate.html',
    inputs:['doneItems', 'doingItems']  
})

export class DoneComponent implements OnInit {
    public doneItems: Item[] = [];
    public doingItems: Item[] = [];
    constructor() { }
    ngOnInit() { }
    onSelect( item : Item ){
        item.stage = 2;
        this.doingItems.push(item);
        this.doneItems.splice(this.doneItems.indexOf(item, 0), 1);
    }
}