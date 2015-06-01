/// <reference path="typings/refs.d.ts" />
var Ecommerce;
(function (Ecommerce) {
    'user strict';
    var EcommerceApp = (function () {
        function EcommerceApp(name) {
            this._ecommerceModule = angular.module(name, [
                "ui.router",
                'ui.bootstrap'
            ]);
            this._ecommerceModule.config([
                '$stateProvider',
                '$urlRouterProvider',
                '$locationProvider',
                function ($stateProvider, $urlRouterProvider, $locationProvider) {
                    //  $httpProvider.interceptors.push('httpInterceptor');
                    $locationProvider.html5Mode({ enabled: true, requireBase: false, rewriteLinks: true });
                    $urlRouterProvider.otherwise("/home");
                }
            ]);
        }
        EcommerceApp.prototype.start = function () {
            var _this = this;
            $(document).ready(function () {
                // console.log("booting " + this.workspaceModule.name);
                angular.bootstrap(document, [_this._ecommerceModule.name]);
            });
        };
        return EcommerceApp;
    })();
    Ecommerce.EcommerceApp = EcommerceApp;
    var _ecommerceApp = new EcommerceApp("ecommerceApp");
    _ecommerceApp._ecommerceModule.config(['$stateProvider', function ($stateProvider) { return new Ecommerce.Routes($stateProvider); }]);
    _ecommerceApp._ecommerceModule.factory('BaseApiService', ['$q', '$http', function ($q, $http) { return new Ecommerce.Services.BaseApiService($q, $http); }]);
    _ecommerceApp._ecommerceModule.factory('ElectronicService', ['BaseApiService', '$q', function (BaseApiService, $q) { return new Ecommerce.Services.ElectronicService(BaseApiService, $q); }]);
    _ecommerceApp._ecommerceModule.controller('ElectronicController', ['ElectronicService', '$scope', function (ElectronicService, $scope) { return new Ecommerce.Electronic.ElectronicController(ElectronicService, $scope); }]);
    _ecommerceApp._ecommerceModule.factory('ComputerService', ['BaseApiService', '$q', function (BaseApiService, $q) { return new Ecommerce.Services.ComputerService(BaseApiService, $q); }]);
    _ecommerceApp._ecommerceModule.controller('ComputerController', ['ComputerService', '$scope', function (ComputerService, $scope) { return new Ecommerce.Computer.ComputerController(ComputerService, $scope); }]);
    _ecommerceApp.start();
})(Ecommerce || (Ecommerce = {}));
//# sourceMappingURL=app.js.map