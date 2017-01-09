/**
 *@Author: chad.ding@vipshop.com
 *@Copyright: 2008-2016 VIPSHOP.COM|唯品会
 *@Date: 2017-01-06 18:25:52
 */

'use strict';

(function(angular, window) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.factory('_$profile', ['$resource', function($resource) {

        var resource = {
            getProfileInfo: $resource(window.HOST + '/profile/get', {}, { get: { method: 'GET' } })
        };

        function getProfileInfo(params) {
            var q = resource.getProfileInfo.get(params).$promise;
            return q;
        }

        return {
            getProfileInfo: getProfileInfo
        };

    }]);

})(angular, window);
