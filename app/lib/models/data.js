System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ITEMS;
    return {
        setters:[],
        execute: function() {
            exports_1("ITEMS", ITEMS = [
                { "id": 0, "name": "Make to do list", "stage": 1, "createdTime": new Date() },
                { "id": 1, "name": "Check off first thing on to do list", "stage": 1, "createdTime": new Date() },
                { "id": 2, "name": "Realize you have already completed 2 things", "stage": 1, "createdTime": new Date() },
                { "id": 3, "name": "Hate to do list", "stage": 1, "createdTime": new Date() }
            ]);
        }
    }
});
// public id: number;
// public name: string;
// public stage: number; //1-todo, 2-doing, 3-done
// public createdTime: Date;
/*
 var item: Item = {
        id: 0,
        name: "Make to do list",
        stage: 1,
        createdTime: new Date()
    };
    var item2: Item = {
        id: 1,
        name: "Check off first thing on to do list",
        stage: 1,
        createdTime: new Date()
    };
    var item3: Item = {
        id: 2,
        name: "Realize you have already completed 2 things",
        stage: 1,
        createdTime: new Date()
    };
    this.items.push(item);
    this.items.push(item2);
    this.items.push(item3);
    
    item = new Item();
    item.id = 3;
    item.name = "Hate to do list";
    item.stage= 1;
    item.createdTime= new Date();
    this.items.push(item); */ 
//# sourceMappingURL=data.js.map