/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:52:04
 */

'use strict';

(function(angular, $) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.factory('$setting', ['$rootScope', '$sessionStorage', '$state', '$uibModal', function($rootScope, $sessionStorage, $state, $uibModal) {

        function login() {

            $uibModal.open({
                templateUrl: 'views/template/login-modal.tpl.html',
                backdrop: 'static',
                controllerAs: 'vm',
                controller: ['$rootScope', '$cookies', '_$user', '$uibModalInstance', function($rootScope, $sessionStorage, _$user, $uibModalInstance) {

                    var vm = this;

                    vm.formOptions = {
                        form: 'loginForm',
                        submitted: false,
                        loginName: '',
                        loginPassword: ''
                    };

                    vm.cancel = function(event) {
                        event && event.stopPropagation();
                        $uibModalInstance.dismiss();
                    };

                    vm.ok = function(event) {
                        event && event.stopPropagation();

                        vm.formOptions.submitted = true;
                        if(vm.formOptions.form.$invalid){
                            return;
                        }

                        var params = {
                            loginName: $.trim(vm.formOptions.loginName),
                            loginPassword: $.trim(vm.formOptions.loginPassword)
                        };

                        _$user.login(params).then(function(res) {

                            $sessionStorage.userId = res.data;

                            params = {
                                userId: res.data
                            };

                            _$user.getUserInfo(params).then(function(res) {
                                $rootScope.userInfo = res.data;
                                $uibModalInstance.dismiss();
                            });

                        });
                    };

                }]
            });
        }

        function startup() {

            var userId = $sessionStorage.userId;
            $rootScope.userInfo = {
                userId: userId
            };

        }

        return {
            login: login,
            startup: startup
        };

    }]);
})(angular, jQuery);