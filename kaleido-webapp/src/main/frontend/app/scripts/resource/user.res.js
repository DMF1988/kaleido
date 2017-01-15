/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:51:42
 */

'use strict';

(function(angular, window){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.factory('_$user', ['$resource', function($resource){

        var resource = {
            getUserInfo: $resource(window.HOST + '/user/get', {}, { get: { method: 'GET' } }),
            login: $resource(window.HOST + '/user/login', {}, { post: { method: 'POST' } }),
            signup: $resource(window.HOST + '/user/signup', {}, { post: { method: 'POST' } })
        };

        function getUserInfo(params){
            var q = resource.getUserInfo.get(params, {}).$promise;
            return q;
        }

        function login(params) {
            var q = resource.login.post(params, {}).$promise;
            return q;
        }

        function signup(params) {
            var q = resource.signup.post(params, {}).$promise;
            return q;
        }

        return {
            getUserInfo: getUserInfo,
            login: login,
            signup: signup
        };

    }]);
})(angular, window);