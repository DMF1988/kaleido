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
            //修改登录账号
            updateEmail: $resource(window.HOST + '/api/user/updateEmail', {}, { update: { method: 'GET' } }),
            //修改登录密码
            updatePassword: $resource(window.HOST + '/api/user/updatePassword', {}, { update: { method: 'GET' } }),
            //获取用户信息
            getUserInfo: $resource(window.HOST + '/api/user/get', {}, { get: { method: 'GET' } }),
            //登录
            login: $resource(window.HOST + '/api/user/login', {}, { send: { method: 'GET' } }),
            //注册
            signup: $resource(window.HOST + '/api/user/signup', {}, { send: { method: 'GET' } })
        };

        function updateEmail(params){
            var q = resource.updateEmail.update(params).$promise;
            return q;
        }

        function updatePassword(params){
            var q = resource.updatePassword.update(params).$promise;
            return q;
        }

        function getUserInfo(params){
            var q = resource.getUserInfo.get(params, {}).$promise;
            return q;
        }

        function login(params) {
            var q = resource.login.send(params).$promise;
            return q;
        }

        function signup(params) {
            var q = resource.signup.send(params).$promise;
            return q;
        }

        return {
            updateEmail: updateEmail,
            updatePassword: updatePassword,
            getUserInfo: getUserInfo,
            login: login,
            signup: signup
        };

    }]);
})(angular, window);