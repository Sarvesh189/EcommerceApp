module Ecommerce.Services {

    export interface IBaseApiService {
        getData: <T>(url?: string) => angular.IPromise<T>;
        postData: <T>(formData: any, url?: string, contentType?: string) => angular.IPromise<T>;
        deleteData: <T>(data: any, url?: string, contentType?: string) => angular.IPromise<T>;
    }

    export class BaseApiService implements IBaseApiService {
        static $inject = ['$q', '$http'];
        public apiBaseUrl: string = 'http://localhost:9163/api/';

        constructor(public $q: angular.IQService, public $http: angular.IHttpService) {
        }

        public getData = <T>(url?: string): angular.IPromise<T> => {

            var def = this.$q.defer();
            this.$http.get(this.apiBaseUrl + url).then((successResponse) => {

                if (successResponse)
                    def.resolve(successResponse.data);
                else
                    def.reject('server error');

            },(errorRes) => {
                    def.reject(errorRes);
                });

            return def.promise;
        }

        public postData = <T>(formData: any, url?: string, contentType?: string): angular.IPromise<T> => {

            var def = this.$q.defer();

            this.$http({
                url: this.apiBaseUrl + url,
                method: 'POST',
                data: formData,
                withCredentials: true,
                headers: {
                    'Content-Type': contentType || 'application/json'
                }
            }).then((successResponse) => {
                def.resolve(successResponse.data);
            },(errorRes) => {
                    def.reject(errorRes);
                });

            return def.promise;
        }

        public deleteData = <T>(data: any, url?: string, contentType?: string): angular.IPromise<T> => {

            var def = this.$q.defer();

            this.$http({
                url: this.apiBaseUrl + url,
                method: 'DELETE',
                data: data,
                withCredentials: true,
                headers: {
                    'Content-Type': contentType || 'application/json'
                }
            }).then((successResponse) => {
                def.resolve(successResponse.data);
            },(errorRes) => {
                    def.reject(errorRes);
                });

            return def.promise;
        }
    }
}
 