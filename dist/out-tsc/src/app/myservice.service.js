var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var MyserviceService = /** @class */ (function () {
    //   constructor(private http: Http) { }
    //   getParent(): Observable<any> {
    //     let urlparam = './assets/parent.json';
    //     return this.http.get(urlparam)
    //         .map(res => <Content>res.json())
    //         .do(data => console.log('Parent :' + JSON.stringify(data)))
    //         .catch((error:any) => console.log(error));
    // }
    function MyserviceService(http) {
        this.http = http;
    }
    MyserviceService.prototype.getJSON = function () {
        return this.http.get('assets/parent.json');
    };
    MyserviceService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], MyserviceService);
    return MyserviceService;
}());
export { MyserviceService };
//# sourceMappingURL=myservice.service.js.map