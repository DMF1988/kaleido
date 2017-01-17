/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-17 10:48:57
 */

'use strict';

(function(angular) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.directive('cityPicker', ['$localStorage', '_$meta', function($localStorage, _$meta) {

        return {
            restrict: 'AE',
            replace: true,
            scope: {
                country: '=',
                province: '=',
                city: '='
            },
            templateUrl: 'views/template/city-picker.html',
            link: function(scope, element, attrs) {

                scope.commonInfo = {
                    countries: [],
                    provinces: [],
                    province: {}
                };

                if (!$localStorage.countries) {
                    _$meta.getCountry().then(function(res) {
                        $localStorage.countries = res.data;
                        scope.commonInfo.countries = formatCountiy(res.data);
                    });
                } else {
                    scope.commonInfo.countries = formatCountiy($localStorage.countries);
                }

                getCities(scope.country, scope.province, scope.commonInfo);

                scope.$watch('province', function(nValue, oValue){
                    if(nValue === oValue){
                        return;
                    }

                    var province = scope.commonInfo.provinces.filter(function(item){
                        return item.code === nValue;
                    });

                    scope.commonInfo.province = province[0];
                    scope.city = scope.commonInfo.province.cities[0].code;
                });
            }
        };

        function getCities(countryCode, provinceCode, handler) {

            if (!$localStorage[countryCode]) {
                var params = {
                    countryCode: countryCode
                };

                _$meta.getCity(params).then(function(res) {
                    $localStorage.cities = res.data;
                    handler = formatCity(res.data);
                });
            } else {
                handler.provinces = formatCity($localStorage[countryCode]);
                var province = handler.provinces.filter(function(item){
                        return item.code === provinceCode;
                    });

                    handler.province = province[0];
            }

        }

        function formatCity(data) {

            var result = [];
            if (!data) {
                return result;
            }

            for (var p in data) {

                var object = data[p];
                if (object.nextLevelIds.length < 1) {
                    continue;
                }

                var province = {
                    code: p,
                    name: object.name,
                    firstPinyin: object.firstPinyin,
                    cities: (function(cityIds) {

                        var cities = [];
                        cityIds.forEach(function(item) {
                            var city = {
                                    code: ''+item
                                },
                                cityObj = data[item];
                            city.name = cityObj.name;
                            city.firstPinyin = cityObj.firstPinyin;
                            cities.push(city);
                        });

                        return cities;

                    })(object.nextLevelIds)
                };

                result.push(province);
            }

            return result;
        }


        function formatCountiy(data) {
            var result = [];
            if (!data) {
                return result;
            }

            for (var key in data) {
                result.push({
                    code: key,
                    name: data[key]
                });
            }

            return result;

        }

    }]);

})(angular);
