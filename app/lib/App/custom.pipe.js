System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TodoItemPipe, DoingItemPipe, DoneItemPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoItemPipe = (function () {
                function TodoItemPipe() {
                }
                TodoItemPipe.prototype.transform = function (items) {
                    var todoItems;
                    todoItems = new Array(items.length);
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].stage == 1) {
                            //console.log(items[i]);
                            todoItems[i] = items[i];
                            console.log(todoItems[i]);
                        }
                    }
                    return todoItems;
                };
                TodoItemPipe = __decorate([
                    core_1.Pipe({
                        name: 'todoItem'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoItemPipe);
                return TodoItemPipe;
            }());
            exports_1("TodoItemPipe", TodoItemPipe);
            DoingItemPipe = (function () {
                function DoingItemPipe() {
                }
                DoingItemPipe.prototype.transform = function (items) {
                    console.log(items);
                    return items;
                };
                DoingItemPipe = __decorate([
                    core_1.Pipe({
                        name: 'doingItem'
                    }), 
                    __metadata('design:paramtypes', [])
                ], DoingItemPipe);
                return DoingItemPipe;
            }());
            exports_1("DoingItemPipe", DoingItemPipe);
            DoneItemPipe = (function () {
                function DoneItemPipe() {
                }
                DoneItemPipe.prototype.transform = function (items) {
                    console.log(items);
                    return items;
                };
                DoneItemPipe = __decorate([
                    core_1.Pipe({
                        name: 'doneItem'
                    }), 
                    __metadata('design:paramtypes', [])
                ], DoneItemPipe);
                return DoneItemPipe;
            }());
            exports_1("DoneItemPipe", DoneItemPipe);
        }
    }
});
//# sourceMappingURL=custom.pipe.js.map