/// <reference path="../../models.ts" />

module Ecommerce.Services {
    'user strict';

    export interface IComputerService {
        GetComputerItems(): angular.IPromise<Array<Ecommerce.Models.ComputerItem>>;
    }

    export class ComputerService implements IComputerService {
        static $inject = ['IBaseApiService', '$q'];

        constructor(private BaseApiService: IBaseApiService, private $q: angular.IQService) {
        }


        GetComputerItems(): angular.IPromise<Array<Ecommerce.Models.ComputerItem>> {
            var deferred = this.$q.defer();
            this.BaseApiService.getData("Computers").then(ComputerServiceResponse=> {
                deferred.resolve(ComputerServiceResponse), deferred.reject(ComputerServiceResponse)
            });
            return deferred.promise;
        }

    }
}
 