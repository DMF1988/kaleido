/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-02-08 15:01:27
 */

'use strict';

(function(angular){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.factory('_$friend', ['$resource', function($resource){

        var resource = {
            //添加好友
            addFriend: $resource(window.HOST + '/friend/add', {}, { add: { method: 'GET' } })
        };

        function addFriend(params){

            var q = resource.addFriend.add(params).$promise;
            return q;
        }


        return {
            addFriend: addFriend
        };

    }]);

})(angular, window);