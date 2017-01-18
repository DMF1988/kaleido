/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:51:26
 */

'use strict';

(function(angular, $) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('ProfileCtrl', ['$scope', '$notify', '_$profile', function($scope, $notify, _$profile) {

        var vm = this;

        init();

        function init() {
            
            getProfile();

            $scope.$on('$userUpdateSuccess', function(){
                getProfile();
            });
        }

        function getProfile() {
            var params = {
                userId: $scope.userInfo.userId
            };

            _$profile.getProfileInfo(params).then(function(res) {
                $scope.profile = res.data;
                $scope.$broadcast('$profileLoadSuccess');
            });
        }

    }]);
})(angular, jQuery);
