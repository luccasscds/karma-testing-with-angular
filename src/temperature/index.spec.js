// import { temperatureCtrl } from './index.controller';
describe('TemperatureCtrl', function() {
    beforeEach(angular.mock.module('MyApp'));
    
    // /** @type { angular.IRootScopeService } */
    // this.$rootScope;
    // /** @type { angular.IController } */
    var controller;
    // /** @type { angular.IScope } */
    var scope;
    // var TemperatureCtrl;
    
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller("temperatureCtrl as temp", { $scope : scope });
        // $controller = _$controller_("temperatureCtrl as temp", { $scope : this.$scope })
    }));

    it("teste one", function() {
        expect(scope.title).toBe("Temperature °C °F");
    })
    // describe("testing a controller", function() {
        
    //     it("testing o method FahrenheitToCelsius()", function() {
    //         var $scope = {};
            
    //         expect(4).toBe(4);
    //         // this.$scope.FahrenheitToCelsius(50);
    //         // expect(this.$scope.showHere).toBe("10 °C");
    //     });
    // });
    it("teste de soma", function() {
        expect(2+2).toBe(4);
    })
})