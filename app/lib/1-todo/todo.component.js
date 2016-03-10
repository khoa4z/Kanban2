System.register(['angular2/core', '../App/custom.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, custom_pipe_1;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (custom_pipe_1_1) {
                custom_pipe_1 = custom_pipe_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent() {
                    this.todoItems = [];
                    this.doingItems = [];
                }
                TodoComponent.prototype.ngOnInit = function () { };
                TodoComponent.prototype.onSelect = function (item) {
                    item.stage = 2;
                    this.doingItems.push(item);
                    this.todoItems.splice(this.todoItems.indexOf(item, 0), 1);
                };
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        //template: 'This is todo component',
                        templateUrl: "./app/lib/1-todo/todoTemplate.html",
                        inputs: ['todoItems', 'doingItems'],
                        pipes: [custom_pipe_1.TodoItemPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoComponent);
                return TodoComponent;
            })();
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//Difference between constructor and ngOnInit:
/**********************************************
 *
 *
 *
 *
 ***********************************************/ 
//# sourceMappingURL=todo.component.js.map