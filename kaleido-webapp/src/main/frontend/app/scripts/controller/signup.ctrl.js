/**
 *@Author: chad.ding@vipshop.com
 *@Copyright: 2008-2016 VIPSHOP.COM|唯品会
 *@Date: 2017-01-10 14:47:51
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