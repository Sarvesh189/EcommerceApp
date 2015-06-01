var Ecommerce;
(function (Ecommerce) {
    var Computer;
    (function (Computer) {
        'use strict';
        var ComputerController = (function () {
            function ComputerController(computerSerivce, $scope) {
                this.computerSerivce = computerSerivce;
                this.$scope = $scope;
                this.getComputerItems();
            }
            ComputerController.prototype.getComputerItems = function () {
                var _this = this;
                this.computerSerivce.GetComputerItems().then(function (items) {
                    _this.ComputerItems = items;
                }, function (err) { return alert(err); });
            };
            ComputerController.$inject = ['ElectronicService', '$scope'];
            return ComputerController;
        })();
        Computer.ComputerController = ComputerController;
    })(Computer = Ecommerce.Computer || (Ecommerce.Computer = {}));
})(Ecommerce || (Ecommerce = {}));
//# sourceMappingURL=computerController.js.map