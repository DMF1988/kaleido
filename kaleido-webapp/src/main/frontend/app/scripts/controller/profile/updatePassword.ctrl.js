/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-18 15:42:47
 */

'use strict';

(function(angular, $) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('UpdatePasswordCtrl', ['$scope', '$state', '$notify', '_$user', function($scope, $state, $notify, _$user) {
        var vm = this;

        vm.formOptions = {
            form: 'updatePasswordForm',
            submitted: false,
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        };

        vm.ok = function(event) {
            event && event.stopPropagation();

            vm.formOptions.submitted = true;

            if (vm.formOptions.form.$invalid) {
                return;
            }

            if ($.trim(vm.formOptions.newPassword) !== $.trim(vm.formOptions.confirmPassword)) {
                $notify.warn('新密码与确认密码不一致');
                return;
            }

            if ($.trim(vm.formOptions.oldPassword) === $.trim(vm.formOptions.newPassword)) {
                $notify.warn('新旧密码相同');
                return;
            }

            var params = {
                loginName: $scope.userInfo.loginName,
                oldPassword: md5($.trim(vm.formOptions.oldPassword)),
                newPassword: md5($.trim(vm.formOptions.newPassword))
            };

            _$user.updatePassword(params).then(function(res) {
                $state.go('login');
            });
        };



        vm.cancel = function(event) {
            event && event.stopPropagation();

            $state.go('kaleido.profile.stage');
        };

    }]);

})(angular, jQuery);
