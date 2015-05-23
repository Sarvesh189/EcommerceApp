/// <reference path="app/typings/refs.d.ts" />
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
                '$httpProvider',
                '$urlRouterProvider',
                '$locationProvider',
                function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
                    $httpProvider.interceptors.push('httpInterceptor');
                    $locationProvider.html5Mode({ enabled: true, requireBase: false, rewriteLinks: true });
                    $urlRouterProvider.otherwise("/home");
                }
            ]);
        }
        return EcommerceApp;
    })();
    Ecommerce.EcommerceApp = EcommerceApp;
    var _ecommerceApp = new EcommerceApp("ecommerceApp");
    _ecommerceApp._ecommerceModule.config(['$stateProvider']);
})(Ecommerce || (Ecommerce = {}));
//# sourceMappingURL=app.js.map