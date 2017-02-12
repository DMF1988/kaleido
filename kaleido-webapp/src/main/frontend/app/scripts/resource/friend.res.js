/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-02-08 15:01:27
 */

'use strict';

(function(angular, window){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.factory('_$friend', ['$resource', function($resource){

        var resource = {
            //添加好友
            addFriend: $resource(window.HOST + '/api/friend/add', {}, { add: { method: 'GET' } }),
            //拉取好友列表（包括已生效、待审批、黑名单好友）
            getFriendList: $resource(window.HOST + '/api/friend/list', {}, { get: { method: 'GET' } }),
        };

        function addFriend(params){

            var q = resource.addFriend.add(params).$promise;
            return q;
        }

        function getFriendList(params){
            var q = resource.getFriendList.get(params).$promise;
            return q;
        }

        return {
            addFriend: addFriend,
            getFriendList: getFriendList
        };

    }]);

})(angular, window);