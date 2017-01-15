/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:51:26
 */

'use strict';

(function(angular){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('ProfileCtrl', ['$scope', '$notify', '_$profile', function($scope, $notify, _$profile){

        var vm = this;

        init();

        function init(){
            vm.commonInfo = {
                profile: {}
            };

            var params = {
                userId: $scope.userInfo.userId
            };

            _$profile.getProfileInfo(params).then(function(data){
                vm.commonInfo.profile = data.data;
            });
        }

    }]);
})(angular);