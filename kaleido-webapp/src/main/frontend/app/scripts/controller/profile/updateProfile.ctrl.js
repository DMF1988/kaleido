/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-18 15:37:52
 */

'use strict';

(function(angular, $){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('UpdateProfileCtrl', ['$scope', '$state', '_$profile', function($scope, $state, _$profile){

        var vm = this;

        function init(){
            vm.formOptions = {
                form: 'profileForm',
                submitted: false
            };

            if($scope.profile){
                angular.extend(vm.formOptions, $scope.profile);
            }

            $scope.$on('$profileLoadSuccess', function(){
                angular.extend(vm.formOptions, $scope.profile);
            });
        }

        init();

        vm.cancel = function(event){
            event && event.stopPropagation();
            $state.go('kaleido.profile.stage');
        };

        vm.ok = function(event){
            event && event.stopPropagation();

            var params = {
                userId: vm.formOptions.userId,
                userName: $.trim(vm.formOptions.userName),
                realName: $.trim(vm.formOptions.realName),
                phoneNum: $.trim(vm.formOptions.phoneNum),
                gender: vm.formOptions.gender,
                birthday: vm.formOptions.birthday,
                country: vm.formOptions.country,
                province: vm.formOptions.province,
                city: vm.formOptions.city,
                address: $.trim(vm.formOptions.address),
                degree: vm.formOptions.degree,
                occupation: vm.formOptions.occupation
            };

            _$profile.updateProfile(params).then(function(res){
                $scope.$emit('$userUpdateSuccess');
                $state.go('kaleido.profile.stage');
            });

        };

    }]);

})(angular, jQuery);