var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Content } from './content';
import * as XLSX from 'xlsx';
var AppComponent = /** @class */ (function () {
    function AppComponent(myserviceService) {
        this.myserviceService = myserviceService;
        this.datap = new Content();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myserviceService.getJSON().subscribe(function (data) {
            _this.datap = data, console.log('obj', _this.datap);
            console.log('year', _this.datap.Year);
        });
        var testUrl = 'assets/Sample.xlsx';
        var oReq = new XMLHttpRequest();
        oReq.open('GET', testUrl, true);
        oReq.responseType = 'arraybuffer';
        oReq.onload = function (e) {
            var arraybuffer = oReq.response;
            /* convert data to binary string */
            var data = new Uint8Array(arraybuffer);
            var arr = new Array();
            for (var i = 0; i !== data.length; ++i) {
                arr[i] = String.fromCharCode(data[i]);
                //  console.log("Data"+data[i]);
            }
            var bstr = arr.join('');
            var workbook = XLSX.read(bstr, { type: 'binary' });
            // console.log("Data"+bstr);
            var first_sheet_name = workbook.SheetNames[0];
            /* Get worksheet */
            var worksheet = workbook.Sheets[first_sheet_name];
            // const json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {header: 1, raw: true});
            var json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { raw: true, defval: null });
            var jsonOut = JSON.stringify(json);
            console.log('test' + jsonOut);
            // console.log(XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { raw: true, defval: null }));
        };
        oReq.send();
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [MyserviceService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
// changeParent() {
//   if (!this.parent) {
//     this.child1 = false;
//     this.child2 = false;
//   } else if (this.parent) {
//     this.child1 = true;
//     this.child2 = true;
//   }
// }
// changeChild() {
//   if (((this.child1) || (this.child2)) || ((this.child1) && (this.child2))) {
//     this.parent = true;
//   } else {
//     this.parent = false;
//   }
// }
// changeParent2() {
//   if (!this.parent2) {
//     this.child3 = false;
//     this.child4 = false;
//   } else if (this.parent2) {
//     this.child3 = true;
//     this.child4 = true;
//   }
// }
// changeChild2() {
//   if (((this.child3) || (this.child4)) || ((this.child3) && (this.child4))) {
//     this.parent2 = true;
//   } else {
//     this.parent2 = false;
//   }
// }
//# sourceMappingURL=app.component.js.map