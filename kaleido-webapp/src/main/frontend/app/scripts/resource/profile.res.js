/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:51:48
 */

'use strict';

(function(angular, window) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.factory('_$profile', ['$resource', function($resource) {

        var resource = {
            //搜索用户
            queryUser: $resource(window.HOST + '/api/profile/query', {}, { query: { method: 'POST' } }),
            //获取用户详细信息
            getProfileInfo: $resource(window.HOST + '/api/profile/get', {}, { get: { method: 'GET' } }),
            //更新用户信息
            updateProfile: $resource(window.HOST + '/api/profile/update', {}, { update: { method: 'POST' } })
        };

        function queryUser(params){
            var q = resource.queryUser.query(params).$promise;
            return q;
        }

        function getProfileInfo(params) {
            var q = resource.getProfileInfo.get(params).$promise;
            return q;
        }

        function updateProfile(params) {
            var q = resource.updateProfile.update(params).$promise;
            return q;
        }

        return {
            queryUser: queryUser,
            getProfileInfo: getProfileInfo,
            updateProfile: updateProfile
        };

    }]);

})(angular, window);
