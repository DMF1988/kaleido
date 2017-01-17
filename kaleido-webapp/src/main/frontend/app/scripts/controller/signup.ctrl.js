/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:51:32
 */

'use strict';

(function(angular, $, md5){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('SignupCtrl', ['$scope', '$state', '_$user', function($scope, $state, _$user){

        var vm = this;

        vm.formOptions = {
            form: 'signupForm',
            submitted: false,
            loginName: '',
            loginPassword: ''
        };

        vm.signup = function(event){
            event && event.stopPropagation();

            vm.formOptions.submitted = true;
            if(vm.formOptions.form.$invalid){
                return;
            }

            var params = {
                loginName: $.trim(vm.formOptions.loginName),
                loginPassword: md5($.trim(vm.formOptions.loginPassword))
            };

            _$user.signup(params).then(function(data){
                $state.go('login');
            });

        };

    }]);
})(angular, jQuery, md5);