/**
 *@Author: chad.ding@vipshop.com
 *@Copyright: 2008-2016 VIPSHOP.COM|唯品会
 *@Date: 2017-01-10 14:42:38
 */

'use strict';

(function(angular) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('KaleidoCtrl', ['$scope', '$MENUS', function($scope, $MENUS) {

        var vm = this;

        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

            var currentState = toState.name;
            vm.menus.forEach(function(item) {
                item.active = currentState.indexOf(item.key) !== -1;
            });

        });

        vm.menus = $MENUS;
        vm.userId = 1;

    }]);

})(angular);
