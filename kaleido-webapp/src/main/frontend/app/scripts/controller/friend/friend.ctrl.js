/**
 *@Author: chad.ding
 *@Copyright: 2008-2016 CHAD | 丁铭锋
 *@Date: 2017-01-11 00:00:01
 */

'use strict';

(function(angular, $){

	var kaleidoApp = angular.module('kaleidoApp');

	kaleidoApp.controller('FriendCtrl', ['$scope', '$uibModal', '_$friend', function($scope, $uibModal, _$friend){

        var vm = this;

        vm.commonInfo = {
            currentState: ''
        };

        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){

            vm.commonInfo.currentState = toState.name;

        });

        _$friend.getFriendList().then(function(res){
            $scope.friendList = res.data;
        });

        function setMatched(source, target){

            if(!angular.isArray(source)){
                return;
            }

            target = target || [];
            target.push($scope.userInfo);
            source.forEach(function(friend){

                friend.checked = target.some(function(item){
                    return friend.userId === item.userId;
                });

            });
        }

        vm.addFriend = function(event){
            event && event.stopPropagation();

            $uibModal.open({
                templateUrl: 'views/friend/add-friend-modal.tpl.html',
                backdrop: 'static',
                size: 'lg',
                resolve: {
                    friendList: function(){
                        return $scope.friendList;
                    }
                },
                controllerAs: 'vm',
                controller: ['$scope', '$uibModalInstance', '_$profile', '_$friend', 'friendList', function($scope, $uibModalInstance, _$profile, _$friend, friendList){

                    var vm = this;

                    vm.pageInfo = {
                        pageSize: 2,
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
                        vm.pageInfo.pageNum = 1;
                        queryUser(vm.pageInfo.pageNum);
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

                            setMatched(vm.commonInfo.userList, friendList);
                        });
                    }

                    queryUser(vm.pageInfo.pageNum);

                    $scope.$on('$pageChangeSuccess', function(event, pageNum){
                        queryUser(pageNum);
                    });

                    vm.addFriend = function(user, event){
                        event && event.stopPropagation();

                        var params = {
                            userId: user.userId
                        };

                        _$friend.addFriend(params).then(function(res){
                            user.checked = true;
                        });
                    };

                }]
            });
        };

	}]);

})(angular, jQuery);