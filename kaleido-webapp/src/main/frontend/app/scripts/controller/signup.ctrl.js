/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:51:32
 */

'use strict';

(function(angular, $, md5) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('SignupCtrl', ['$scope', '$state', '_$user', '$notify', function($scope, $state, _$user, $notify) {

        var vm = this;

        vm.formOptions = {
            form: 'signupForm',
            submitted: false,
            loginName: '',
            loginPassword: '',
            codeMatch: false
        };

        vm.signup = function(event) {
            event && event.stopPropagation();

            vm.formOptions.submitted = true;
            if (vm.formOptions.form.$invalid) {
                return;
            }

            if (!vm.formOptions.codeMatch) {
                $notify.warn('请输入正确的验证码');
                return;
            }

            var params = {
                loginName: $.trim(vm.formOptions.loginName),
                loginPassword: md5($.trim(vm.formOptions.loginPassword))
            };

            _$user.signup(params).then(function(data) {
                $state.go('login');
            }, function() {
                $scope.$broadcast('$refreshCode');
            });

        };

    }]);
})(angular, jQuery, md5);
