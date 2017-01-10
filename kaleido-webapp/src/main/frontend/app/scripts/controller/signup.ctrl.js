/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:51:32
 */

'use strict';

(function(angular){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('SignupCtrl', ['$scope', '$state', '_$account', function($scope, $state, _$account){

        var vm = this;

        vm.formOptions = {
            form: 'signupForm',
            submitted: false,
            loginName: '',
            loginPassword: '',
            userName: ''
        };

        vm.signup = function(event){
            event && event.stopPropagation();

            vm.formOptions.submitted = true;
            if(vm.formOptions.form.$invalid){
                return;
            }

            var params = {
                loginName: $.trim(vm.formOptions.loginName),
                loginPassword: $.trim(vm.formOptions.loginPassword),
                userName: $.trim(vm.formOptions.userName)
            };

            _$account.signup(params).then(function(data){
                $state.go('kaleido.album');
            });

        };

    }]);
})(angular);