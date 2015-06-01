/// <reference path="../../models.ts" />
var Ecommerce;
(function (Ecommerce) {
    var Services;
    (function (Services) {
        'user strict';
        var ElectronicService = (function () {
            function ElectronicService(BaseApiService, $q) {
                this.BaseApiService = BaseApiService;
                this.$q = $q;
            }
            ElectronicService.prototype.GetElectronicItems = function () {
                var deferred = this.$q.defer();
                this.BaseApiService.getData("Electronics").then(function (ElectronicServiceResponse) {
                    deferred.resolve(ElectronicServiceResponse), deferred.reject(ElectronicServiceResponse);
                });
                return deferred.promise;
            };
            ElectronicService.$inject = ['IBaseApiService', '$q'];
            return ElectronicService;
        })();
        Services.ElectronicService = ElectronicService;
    })(Services = Ecommerce.Services || (Ecommerce.Services = {}));
})(Ecommerce || (Ecommerce = {}));
//# sourceMappingURL=ElectronicService.js.map