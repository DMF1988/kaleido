/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:54:44
 */

'use strict';

(function(angular) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.filter('subStr', [function() {

        return function(input, len) {

            if (!angular.isString || input.length <= len) {
                return input;
            }

            return input.subStr(0, len) + '...';
        };

    }]);

    kaleidoApp.filter('gender', [function() {

        return function(input) {
            if (/^M$/i.test(input)) {
                return '男';
            } else if (/^F$/i.test(input)) {
                return '女';
            } else {
                return input;
            }
        };

    }]);

    kaleidoApp.filter('country', ['$localStorage', function($localStorage) {

        var countries = $localStorage.countries;

        return function(input) {
            if (!input) {
                return input;
            }

            return countries[input];
        };

    }]);

    kaleidoApp.filter('city', ['$localStorage', function($localStorage) {

        return function(input, countryCode) {
            var cities = $localStorage[countryCode || 86];

            if (!input) {
                return input;
            }

            var city = '';
            try {
                city = cities[input].name;
            } catch (e) {
                city = input;
            }

            return city;
        };

    }]);

})(angular);
