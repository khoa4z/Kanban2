import {Component, OnInit} from 'angular2/core';
import {Item} from '../models/todoitems';

@Component({
    selector: 'inputBox',
    templateUrl: './app/lib/0-input/inputTemplate.html',
    inputs:['todoItems'],    
})

export class InputComponent implements OnInit {
    public inputData: string;
    public todoItems: Item[] = [];
       
    constructor() { }
    ngOnInit(){}
    onEnterKey(value:string) {
        console.log(value);
        this.inputData = "";
        var newItem:Item = {
            id:this.todoItems.length,
            name:value,
            stage:1,
            createdTime:new Date
        };
        this.todoItems.push(newItem);
        console.log(newItem);
    }
}