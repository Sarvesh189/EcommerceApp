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
    _ecommerceApp.start();
})(Ecommerce || (Ecommerce = {}));
//# sourceMappingURL=app.js.map