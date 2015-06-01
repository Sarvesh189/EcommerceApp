module Ecommerce.Electronic
{
    'use strict';
    export interface IElectronicController
    {
        getElectronicItems(): void;

    }

    export class ElectronicController implements IElectronicController
    {
        static $inject = ['ElectronicService', '$scope'];
        ElectronicItems : Array<Ecommerce.Models.ElectronicItem>;

        constructor(private electronicSerivce: Ecommerce.Services.IElectronicService, private $scope: angular.IScope) {
            this.getElectronicItems();
        }

        getElectronicItems(): void {
            this.electronicSerivce.GetElectronicItems().then(items=> { this.ElectronicItems = items; },(err) => alert(err));

        }

    }
}