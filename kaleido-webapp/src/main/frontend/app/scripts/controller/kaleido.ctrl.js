/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:51:13
 */

'use strict';

(function(angular) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('KaleidoCtrl', ['$rootScope', '$scope', '$state', '$sessionStorage', '$MENUS', '$setting', '_$user', function($rootScope, $scope, $state, $sessionStorage, $MENUS, $setting, _$user) {

        var vm = this;

        $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

            if(!$sessionStorage.userId && ['monitor', 'footstep', 'album', 'diary', 'friend', 'profile'].indexOf(toState.name) !== -1){
                event.preventDefault();
                $state.go('login');
            }

        });

        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

            var currentState = toState.name;
            vm.menus.forEach(function(item) {
                item.active = currentState.indexOf(item.key) !== -1;
            });

        });

        vm.menus = $MENUS;

        if (!$rootScope.userInfo || !$rootScope.userInfo.userId) {
            $state.go('login');
            return;
        }

        getUserInfo();

        function getUserInfo() {
            var userId = $rootScope.userInfo.userId;
            var params = {
                userId: userId
            };

            _$user.getUserInfo(params).then(function(res) {

                $rootScope.userInfo = res.data;

            });
        }

    }]);

})(angular);
