var Ecommerce;
(function (Ecommerce) {
    var Services;
    (function (Services) {
        var BaseApiService = (function () {
            function BaseApiService($q, $http) {
                var _this = this;
                this.$q = $q;
                this.$http = $http;
                this.apiBaseUrl = 'http://localhost:9163/api/';
                this.getData = function (url) {
                    var def = _this.$q.defer();
                    _this.$http.get(_this.apiBaseUrl + url).then(function (successResponse) {
                        if (successResponse)
                            def.resolve(successResponse.data);
                        else
                            def.reject('server error');
                    }, function (errorRes) {
                        def.reject(errorRes);
                    });
                    return def.promise;
                };
                this.postData = function (formData, url, contentType) {
                    var def = _this.$q.defer();
                    _this.$http({
                        url: _this.apiBaseUrl + url,
                        method: 'POST',
                        data: formData,
                        withCredentials: true,
                        headers: {
                            'Content-Type': contentType || 'application/json'
                        }
                    }).then(function (successResponse) {
                        def.resolve(successResponse.data);
                    }, function (errorRes) {
                        def.reject(errorRes);
                    });
                    return def.promise;
                };
                this.deleteData = function (data, url, contentType) {
                    var def = _this.$q.defer();
                    _this.$http({
                        url: _this.apiBaseUrl + url,
                        method: 'DELETE',
                        data: data,
                        withCredentials: true,
                        headers: {
                            'Content-Type': contentType || 'application/json'
                        }
                    }).then(function (successResponse) {
                        def.resolve(successResponse.data);
                    }, function (errorRes) {
                        def.reject(errorRes);
                    });
                    return def.promise;
                };
            }
            BaseApiService.$inject = ['$q', '$http'];
            return BaseApiService;
        })();
        Services.BaseApiService = BaseApiService;
    })(Services = Ecommerce.Services || (Ecommerce.Services = {}));
})(Ecommerce || (Ecommerce = {}));
//# sourceMappingURL=baseApiService.js.map