module Ecommerce {
    'use strict';

    export class Routes {

        static $inject = ['$stateProvider'];
        private featuresDir: string = 'App/Components/';
        private sharedDir : string ='App/Shared/';

        constructor(private $stateProvider: angular.ui.IStateProvider) {
            console.log("inside route constructor");
            $stateProvider
                .state('home', {
               url: "/home",
                views: {
                    'header': {
                      //  controller: 'headerController',
                      //  controllerAs: 'vm',
                        templateUrl: this.sharedDir + 'header/headerView.html'
                    },
                    'leftsidebar': {
                        templateUrl: this.sharedDir + 'leftsidebar/leftsidebar.html'
                    },
                    'content': {
                     //   controller: 'homeController',
                     //   controllerAs: 'vm',
                        templateUrl: this.featuresDir + 'home/homeView.html'
                    },
                    'footer': {
                      //  controller: 'footerController',
                      //  controllerAs: 'vm',
                        templateUrl: this.sharedDir + 'footer/footer.html'
                    }
                }
                })

               
            .state('Electronics', {
                url: "/electronics",
                views: {
                    'header': {
                        //  controller: 'headerController',
                        //  controllerAs: 'vm',
                        templateUrl: this.sharedDir + 'header/headerView.html'
                    },
                    'leftsidebar': {
                        templateUrl: this.sharedDir + 'leftsidebar/leftsidebar.html'
                    },
                    'content': {
                           controller: 'ElectronicController',
                           controllerAs: 'ec',
                        templateUrl: this.featuresDir + 'Electronics/Electronic.html'
                    },
                    'footer': {
                        //  controller: 'footerController',
                        //  controllerAs: 'vm',
                        templateUrl: this.sharedDir + 'footer/footer.html'
                    }
                }
            })

                .state('Computers', {
                url: "/computers",
                views: {
                    'header': {
                        //  controller: 'headerController',
                        //  controllerAs: 'vm',
                        templateUrl: this.sharedDir + 'header/headerView.html'
                    },
                    'leftsidebar': {
                        templateUrl: this.sharedDir + 'leftsidebar/leftsidebar.html'
                    },
                    'content': {
                        controller: 'ComputerController',
                           controllerAs: 'cc',
                        templateUrl: this.featuresDir + 'Computers/computer.html'
                    },
                    'footer': {
                        //  controller: 'footerController',
                        //  controllerAs: 'vm',
                        templateUrl: this.sharedDir + 'footer/footer.html'
                    }
                }
            })
        }
    }
} 