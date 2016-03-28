import {Component, OnInit} from 'angular2/core';
import {Item} from '../models/todoitems';
//import {ItemService} from '../App/item.service';
import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';


@Component({
    selector: 'doing',
    templateUrl: './app/lib/2-doing/doingTemplate.html',
    inputs:['doingItems', 'doneItems', 'dragulaItems'] ,  
    
    directives: [Dragula]//,
    //viewProviders:[DragulaService] 
})

export class DoingComponent implements OnInit {
    public doingItems: Item[] = [];
    public doneItems: Item[] = [];
    public dragulaItems: DragulaService;
    
    constructor(private dragulaService: DragulaService) { }
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