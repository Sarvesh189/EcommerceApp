/// <reference path="typings/refs.d.ts" />

module Ecommerce { 
    'user strict';

    export class EcommerceApp {
        _ecommerceModule: angular.IModule;

        constructor(name: string) {
            this._ecommerceModule = angular.module(name, [
                "ui.router",              
                'ui.bootstrap'
                
            ]);

            this._ecommerceModule.config([
                '$stateProvider',               
                '$urlRouterProvider',
                '$locationProvider',
                ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider,
                    $locationProvider: angular.ILocationProvider) => {

                  //  $httpProvider.interceptors.push('httpInterceptor');
                    $locationProvider.html5Mode({ enabled: true, requireBase: false, rewriteLinks: true });
                    $urlRouterProvider.otherwise("/home");
                }
            ]);          
        }
        public start() {
            $(document).ready(() => {
                // console.log("booting " + this.workspaceModule.name);
                angular.bootstrap(document, [this._ecommerceModule.name]);
               
            });
        }

    }

    var _ecommerceApp = new EcommerceApp("ecommerceApp");



    _ecommerceApp._ecommerceModule.config(['$stateProvider', ($stateProvider: angular.ui.IStateProvider)=>
        new Routes($stateProvider)]);

    _ecommerceApp.start();
   
}