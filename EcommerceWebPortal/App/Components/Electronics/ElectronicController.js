var Ecommerce;
(function (Ecommerce) {
    var Electronic;
    (function (Electronic) {
        'use strict';
        var ElectronicController = (function () {
            function ElectronicController(electronicSerivce, $scope) {
                this.electronicSerivce = electronicSerivce;
                this.$scope = $scope;
                this.getElectronicItems();
            }
            ElectronicController.prototype.getElectronicItems = function () {
                var _this = this;
                this.electronicSerivce.GetElectronicItems().then(function (items) {
                    _this.ElectronicItems = items;
                }, function (err) { return alert(err); });
            };
            ElectronicController.$inject = ['ElectronicService', '$scope'];
            return ElectronicController;
        })();
        Electronic.ElectronicController = ElectronicController;
    })(Electronic = Ecommerce.Electronic || (Ecommerce.Electronic = {}));
})(Ecommerce || (Ecommerce = {}));
//# sourceMappingURL=ElectronicController.js.map