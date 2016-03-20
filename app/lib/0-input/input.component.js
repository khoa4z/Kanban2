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
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.todoItems = [];
                }
                InputComponent.prototype.ngOnInit = function () { };
                InputComponent.prototype.onEnterKey = function (value) {
                    console.log(value);
                    this.inputData = "";
                    var newItem = {
                        id: this.todoItems.length,
                        name: value,
                        stage: 1,
                        createdTime: new Date
                    };
                    this.todoItems.push(newItem);
                    console.log(newItem);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'inputBox',
                        templateUrl: './app/lib/0-input/inputTemplate.html',
                        inputs: ['todoItems'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});
//# sourceMappingURL=input.component.js.map