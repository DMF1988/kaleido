/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:51:42
 */

'use strict';

(function(angular){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.factory('_$account', ['$resource', function($resource){

        var resource = {
            login: $resource(window.HOST + '/account/login', {}, { post: { method: 'POST' } }),
            signup: $resource(window.HOST + '/account/signup', {}, { post: { method: 'POST' } })
        };

        function login(params) {
            var q = resource.login.post(params).$promise;
            return q;
        }

        function signup(params) {
            var q = resource.signup.post(params).$promise;
            return q;
        }

        return {
            login: login,
            signup: signup
        };

    }]);
})(angular);