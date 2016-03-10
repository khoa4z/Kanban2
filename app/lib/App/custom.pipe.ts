import {Pipe, PipeTransform} from 'angular2/core';
import {Item} from '../models/todoitems';


@Pipe({ //kinda like a filter
    name: 'todoItem'
})
export class TodoItemPipe implements PipeTransform {
    transform(items:Item[]) : any {
        var todoItems: Item[];        
        todoItems = new Array(items.length);
        for(var i = 0; i<items.length; i++){
            if(items[i].stage == 1){    
                //console.log(items[i]);
                todoItems[i] = items[i];
                console.log(todoItems[i]);
            }
        }
        return todoItems;
    }
}

@Pipe({
    name: 'doingItem'
})
export class DoingItemPipe implements PipeTransform {
    transform(items:Item[]) : any {
        console.log(items)
        return items;
    }
}


@Pipe({
    name: 'doneItem'
})
export class DoneItemPipe implements PipeTransform {
    transform(items:Item[]) : any {
        console.log(items)
        return items;
    }
}
