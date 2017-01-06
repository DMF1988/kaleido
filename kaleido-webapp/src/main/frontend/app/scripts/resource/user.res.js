/**
 *@Author: chad.ding@vipshop.com
 *@Copyright: 2008-2016 VIPSHOP.COM|唯品会
 *@Date: 2017-01-06 18:25:52
 */

'use strict';

(function(angular, window) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.factory('_$user', ['$resource', function($resource) {


        var resource = {
            getUserInfo: $resource(window.HOST + '/home/get', {}, { get: { method: 'POST' } })
        };


        function getUserInfo(params) {
            var q = resource.getUserInfo.get(params).$promise;
            return q;
        }

        return {
            getUserInfo: getUserInfo
        };

    }]);

})(angular, window);
