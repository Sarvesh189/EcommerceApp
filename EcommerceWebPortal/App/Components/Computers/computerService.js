/// <reference path="../../models.ts" />
var Ecommerce;
(function (Ecommerce) {
    var Services;
    (function (Services) {
        'user strict';
        var ComputerService = (function () {
            function ComputerService(BaseApiService, $q) {
                this.BaseApiService = BaseApiService;
                this.$q = $q;
            }
            ComputerService.prototype.GetComputerItems = function () {
                var deferred = this.$q.defer();
                this.BaseApiService.getData("Computers").then(function (ComputerServiceResponse) {
                    deferred.resolve(ComputerServiceResponse), deferred.reject(ComputerServiceResponse);
                });
                return deferred.promise;
            };
            ComputerService.$inject = ['IBaseApiService', '$q'];
            return ComputerService;
        })();
        Services.ComputerService = ComputerService;
    })(Services = Ecommerce.Services || (Ecommerce.Services = {}));
})(Ecommerce || (Ecommerce = {}));
//# sourceMappingURL=computerService.js.map