import { TestBed, inject } from '@angular/core/testing';
import { MyserviceService } from './myservice.service';
describe('MyserviceService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [MyserviceService]
        });
    });
    it('should be created', inject([MyserviceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=myservice.service.spec.js.map