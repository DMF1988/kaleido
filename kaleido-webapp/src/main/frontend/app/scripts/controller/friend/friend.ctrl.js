/**
 *@Author: chad.ding
 *@Copyright: 2008-2016 CHAD | 丁铭锋
 *@Date: 2017-01-11 00:00:01
 */

'use strict';

(function(angular){

	var kaleidoApp = angular.module('kaleidoApp');

	kaleidoApp.controller('FriendCtrl', ['$scope', '$uibModal', function($scope, $uibModal){

        var vm = this;

        vm.commonInfo = {
            currentState: ''
        };

        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){

            vm.commonInfo.currentState = toState.name;

        });

        vm.addFriend = function(event){
            event && event.stopPropagation();

            $uibModal.open({
                templateUrl: 'views/friend/add-friend-modal.tpl.html',
                backdrop: 'static',
                resolve: {
                    userId: function(){
                        return $scope.userInfo.userId;
                    }
                },
                controllerAs: 'vm',
                controller: ['$scope', '$uibModalInstance', '_$user', '_$friend', function($scope, $uibModalInstance, _$user, _$friend){

                    var vm = this;

                    vm.pageInfo = {
                        pageSize: 15,
                        pageNum: 1
                    };

                    vm.cancel = function(event){
                        event && event.stopPropagation();
                        $uibModalInstance.dismiss();
                    };

                }]
            });
        };

	}]);

})(angular);