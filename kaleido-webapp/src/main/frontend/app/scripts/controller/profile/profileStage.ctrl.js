/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-18 15:50:49
 */

'use strict';

(function(angular) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('ProfileStageCtrl', ['$scope', function($scope) {

        var vm = this;

        function init() {
            vm.commonInfo = {
                profile: {}
            };

            if($scope.profile){
                vm.commonInfo.profile = $scope.profile;
            }

            $scope.$on('$profileLoadSuccess', function(){
                vm.commonInfo.profile = $scope.profile;
            });
        }

        init();

    }]);

})(angular);
