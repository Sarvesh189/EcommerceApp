/// <reference path="../../models.ts" />

module Ecommerce.Services {
    'user strict';

    export interface IElectronicService
    {
        GetElectronicItems(): angular.IPromise<Array<Ecommerce.Models.ElectronicItem>>;
    }

    export class ElectronicService implements IElectronicService
    {
        static $inject = ['IBaseApiService', '$q'];

        constructor(private BaseApiService: IBaseApiService, private $q: angular.IQService) {
        }


        GetElectronicItems(): angular.IPromise<Array<Ecommerce.Models.ElectronicItem>>
        {
            var deferred = this.$q.defer();
            this.BaseApiService.getData("Electronics").then(ElectronicServiceResponse=> {
                deferred.resolve(ElectronicServiceResponse), deferred.reject(ElectronicServiceResponse)
            });
            return deferred.promise;
            }
           
        }
    }
