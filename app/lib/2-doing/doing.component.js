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
    var DoingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {ItemService} from '../App/item.service';
            DoingComponent = (function () {
                function DoingComponent() {
                    this.doingItems = [];
                    this.doneItems = [];
                }
                DoingComponent.prototype.ngOnInit = function () { };
                DoingComponent.prototype.onSelect = function (item) {
                    console.log(item);
                    item.stage = 3;
                    this.doneItems.push(item);
                    this.doingItems.splice(this.doingItems.indexOf(item, 0), 1);
                };
                DoingComponent.prototype.onlyFirstStage = function () {
                };
                DoingComponent = __decorate([
                    core_1.Component({
                        selector: 'doing',
                        templateUrl: './app/lib/2-doing/doingTemplate.html',
                        inputs: ['doingItems', 'doneItems']
                    }), 
                    __metadata('design:paramtypes', [])
                ], DoingComponent);
                return DoingComponent;
            }());
            exports_1("DoingComponent", DoingComponent);
        }
    }
});
//# sourceMappingURL=doing.component.js.map