module Ecommerce.Computer {
    'use strict';
    export interface IComputerController {
        getComputerItems(): void;

    }

    export class ComputerController implements IComputerController {
        static $inject = ['ElectronicService', '$scope'];
        ComputerItems: Array<Ecommerce.Models.ComputerItem>;

        constructor(private computerSerivce: Ecommerce.Services.IComputerService, private $scope: angular.IScope) {
            this.getComputerItems();
        }

        getComputerItems(): void {
            this.computerSerivce.GetComputerItems().then(items=> { this.ComputerItems = items; },(err) => alert(err));

        }

    }
}