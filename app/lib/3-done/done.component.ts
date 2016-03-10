import {Component, OnInit} from 'angular2/core';
import {Item} from '../models/todoitems';

@Component({
    selector: 'done',
    templateUrl: './app/lib/3-done/doneTemplate.html',
    inputs:['doneItems']  
})

export class DoneComponent implements OnInit {
    public doneItems: Item[] = [];
    constructor() { }
    ngOnInit() { }
}