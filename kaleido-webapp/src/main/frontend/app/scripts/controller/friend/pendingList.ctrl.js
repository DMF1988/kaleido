/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-02-08 14:33:24
 */

'use strict';

(function(angular){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('PendingListCtrl', ['$scope', '_$friend', function($scope, _$friend){

        var vm = this;

        vm.commonInfo = {
            friendList: []
        };

        $scope.$watch('friendList', function(nValue, oValue){
            if(nValue === oValue && vm.commonInfo.friendList.length !== 0){
                return;
            }
            vm.commonInfo.friendList = nValue.filter(function(item){
                return item.status === 0;
            });

        });

        vm.activeFriend = function(item, event){
            event && event.stopPropagation();

            var params = {
                friend: item.userId,
                status: 1
            };

            _$friend.updateFriend(params).then(function(res){
                item.status = 1;
            });
        };

        vm.removePending = function(item, event){

            event && event.stopPropagation();

            var params = {
                friend: item.userId,
                deleted: 1
            };

            _$friend.updateFriend(params).then(function(res){
                item.deleted = 1;
            });

        };

    }]);
    
})(angular);