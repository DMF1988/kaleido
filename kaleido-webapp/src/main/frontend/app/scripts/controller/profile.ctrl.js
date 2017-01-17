/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:51:26
 */

'use strict';

(function(angular, $){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('ProfileCtrl', ['$scope', '$notify', '_$profile', function($scope, $notify, _$profile){

        var vm = this;

        init();

        function init(){
            vm.commonInfo = {
                edit: false,
                profile: {}
            };

            vm.formOptions = {
                form: 'profileForm',
                submitted: false
            };

            var params = {
                userId: $scope.userInfo.userId
            };

            _$profile.getProfileInfo(params).then(function(res){
                vm.commonInfo.profile = res.data;

                angular.extend(vm.formOptions, res.data);
            });
        }

        vm.ok = function(event){
            event && event.stopPropagation();

            var params = {
                userId: vm.commonInfo.profile.userId,
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

                vm.commonInfo.profile = params;
                vm.commonInfo.edit = false;

            });

        };

    }]);
})(angular, jQuery);