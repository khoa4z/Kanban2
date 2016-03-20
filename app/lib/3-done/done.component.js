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
    var DoneComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DoneComponent = (function () {
                function DoneComponent() {
                    this.doneItems = [];
                    this.doingItems = [];
                }
                DoneComponent.prototype.ngOnInit = function () { };
                DoneComponent.prototype.onSelect = function (item) {
                    item.stage = 2;
                    this.doingItems.push(item);
                    this.doneItems.splice(this.doneItems.indexOf(item, 0), 1);
                };
                DoneComponent = __decorate([
                    core_1.Component({
                        selector: 'done',
                        templateUrl: './app/lib/3-done/doneTemplate.html',
                        inputs: ['doneItems', 'doingItems']
                    }), 
                    __metadata('design:paramtypes', [])
                ], DoneComponent);
                return DoneComponent;
            }());
            exports_1("DoneComponent", DoneComponent);
        }
    }
});
//# sourceMappingURL=done.component.js.map