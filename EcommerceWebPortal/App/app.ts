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

    _ecommerceApp._ecommerceModule.factory('BaseApiService', ['$q', '$http',
        ($q: angular.IQService,$http:angular.IHttpService) =>
            new Services.BaseApiService($q,$http)]);


    _ecommerceApp._ecommerceModule.factory('ElectronicService', ['BaseApiService', '$q',
        (BaseApiService: Ecommerce.Services.IBaseApiService, $q: angular.IQService) =>
            new Services.ElectronicService(BaseApiService,$q)]);

    _ecommerceApp._ecommerceModule.controller('ElectronicController', ['ElectronicService','$scope',
        (ElectronicService: Services.IElectronicService, $scope: angular.IScope) => new Electronic.ElectronicController(ElectronicService, $scope)]);



    _ecommerceApp._ecommerceModule.factory('ComputerService', ['BaseApiService', '$q',
        (BaseApiService: Ecommerce.Services.IBaseApiService, $q: angular.IQService) =>
            new Services.ComputerService(BaseApiService, $q)]);

    _ecommerceApp._ecommerceModule.controller('ComputerController', ['ComputerService', '$scope',
        (ComputerService: Services.IComputerService, $scope: angular.IScope) => new Computer.ComputerController(ComputerService, $scope)]);

    _ecommerceApp.start();
   
}