/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-02-08 14:30:20
 */

'use strict';

(function(angular){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('FriendListCtrl', ['$scope', '_$friend', function($scope, _$friend){

        var vm = this;

        vm.commonInfo = {
            friendList: []
        };

        $scope.$watch('friendList', function(nValue, oValue){
            if(nValue === oValue && vm.commonInfo.length !== 0){
                return;
            }
            vm.commonInfo.friendList = nValue.filter(function(item){
                return item.status === 1;
            });

        });


    }]);

})(angular);