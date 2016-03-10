System.register(['angular2/core', '../0-input/input.component', '../1-todo/todo.component', '../2-doing/doing.component', '../3-done/done.component', '../App/item.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, input_component_1, todo_component_1, doing_component_1, done_component_1, item_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            },
            function (doing_component_1_1) {
                doing_component_1 = doing_component_1_1;
            },
            function (done_component_1_1) {
                done_component_1 = done_component_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_itemService) {
                    this._itemService = _itemService;
                    this.title = 'Kanban';
                    //public items: Item[] = []; 
                    this.todoItems = [];
                    this.doingItems = [];
                    this.doneItems = [];
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._itemService.getItems().then(function (items) { return _this.todoItems = items; });
                    //this._itemService.getItemsForStage().then(items => this.items = items);
                    //this.onlyFirstStage();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        //template: '<h1>#ShietGettingReal</h1>',
                        //templateUrl: './app/AppTemplate.html',
                        templateUrl: "./app/lib/App/AppTemplate.html",
                        directives: [input_component_1.InputComponent, todo_component_1.TodoComponent, doing_component_1.DoingComponent, done_component_1.DoneComponent],
                        providers: [item_service_1.ItemService]
                    }), 
                    __metadata('design:paramtypes', [item_service_1.ItemService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map