/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:52:04
 */

'use strict';

(function(angular, $, window) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.factory('$setting', ['$rootScope', '$state', '$sessionStorage', '$localStorage', '$uibModal', '_$meta', function($rootScope, $state, $sessionStorage, $localStorage, $uibModal, _$meta) {

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
                            loginPassword: md5($.trim(vm.formOptions.loginPassword))
                        };

                        _$user.login(params).then(function(res) {

                            $sessionStorage.userId = res.data;

                            params = {
                                userId: res.data
                            };

                            _$user.getUserInfo(params).then(function(res) {
                                $rootScope.userInfo = res.data;
                                window.location.reload();
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

            if(!$localStorage.countries){
                _$meta.getCountry().then(function(res){
                    $localStorage.countries = res.data;
                });
            }

            if(!$localStorage.cities){
                var params = {
                    countryCode: '86' //china for default
                };

                _$meta.getCity(params).then(function(res){
                    $localStorage['86'] = res.data;
                });
            }

            $rootScope.$on('$sessionTimeout', function(){
                login();
            });

        }

        return {
            login: login,
            startup: startup
        };

    }]);
})(angular, jQuery, window);
