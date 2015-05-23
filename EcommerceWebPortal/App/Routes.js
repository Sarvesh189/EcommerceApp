var Ecommerce;
(function (Ecommerce) {
    'use strict';
    var Routes = (function () {
        function Routes($stateProvider) {
            this.$stateProvider = $stateProvider;
            this.featuresDir = 'App/Components/';
            this.sharedDir = 'App/Shared/';
            console.log("inside route constructor");
            $stateProvider.state('home', {
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
            });
        }
        Routes.$inject = ['$stateProvider'];
        return Routes;
    })();
    Ecommerce.Routes = Routes;
})(Ecommerce || (Ecommerce = {}));
//# sourceMappingURL=Routes.js.map