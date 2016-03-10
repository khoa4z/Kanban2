import {Item} from '../models/todoitems';
import {ITEMS} from '../models/data';
import {Injectable} from 'angular2/core';


@Injectable()
export class ItemService {
    
    getItems() {
        var something = Promise.resolve(ITEMS);
        console.log(something);
        return something;
    }
    getItemsSlowly() {
        return new Promise<Item[]>(resolve =>
            setTimeout(()=>resolve(ITEMS), 6000) // 6 seconds
        );
    }
}

