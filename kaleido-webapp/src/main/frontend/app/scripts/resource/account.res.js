/**
 *@Author: chad.ding@vipshop.com
 *@Copyright: 2008-2016 VIPSHOP.COM|唯品会
 *@Date: 2017-01-10 15:42:57
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