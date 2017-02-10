/**
 *@Author: chad.ding
 *@Copyright: 2008-2016 CHAD | 丁铭锋
 *@Date: 2017-01-11 00:00:01
 */

'use strict';

(function(angular, $){

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
                size: 'lg',
                resolve: {
                    userId: function(){
                        return $scope.userInfo.userId;
                    }
                },
                controllerAs: 'vm',
                controller: ['$scope', '$uibModalInstance', '_$profile', '_$friend', function($scope, $uibModalInstance, _$profile, _$friend){

                    var vm = this;

                    vm.pageInfo = {
                        pageSize: 3,
                        pageNum: 1,
                        pageTotal: 0
                    };

                    vm.commonInfo = {
                        keyword: '',
                        userList: []
                    };

                    vm.cancel = function(event){
                        event && event.stopPropagation();
                        $uibModalInstance.dismiss();
                    };

                    vm.query = function(event){
                        event && event.stopPropagation();

                        queryUser(vm.pageInfo.pageNum)
                    };

                    function queryUser(pageNum){

                        var params = {
                            keyword: $.trim(vm.commonInfo.keyword),
                            pageSize: vm.pageInfo.pageSize,
                            pageNum: pageNum
                        };

                        _$profile.queryUser(params).then(function(res){
                            vm.commonInfo.userList = res.data.data;
                            vm.pageInfo.pageTotal = res.data.total;
                        }); 
                    }

                    queryUser(vm.pageInfo.pageNum);

                    $scope.$on('$pageChangeSuccess', function(event, pageNum){
                        queryUser(pageNum);
                    });

                }]
            });
        };

	}]);

})(angular, jQuery);