/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:51:20
 */

'use strict';

(function(angular, $, md5) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('LoginCtrl', ['$rootScope', '$scope', '$state', '$sessionStorage', '$notify', '_$user', function($rootScope, $scope, $state, $sessionStorage, $notify, _$user) {

        var vm = this;

        vm.formOptions = {
            form: 'loginForm',
            submitted: false,
            loginName: '',
            loginPassword: ''
        };

        vm.login = function(event) {
            event && event.stopPropagation();

            vm.formOptions.submitted = true;
            if (vm.formOptions.form.$invalid) {
                return;
            }

            var params = {
                loginName: $.trim(vm.formOptions.loginName),
                loginPassword: md5($.trim(vm.formOptions.loginPassword))
            };

            _$user.login(params).then(function(res) {

                $sessionStorage.userId = res.data;
                $rootScope.userInfo = {
                    userId: res.data
                };

                $state.go('kaleido.monitor');

            });

        };

    }]);

})(angular, jQuery, md5);
