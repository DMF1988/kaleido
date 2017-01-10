/**
 *@Author: chad.ding@vipshop.com
 *@Copyright: 2008-2016 VIPSHOP.COM|唯品会
 *@Date: 2017-01-10 14:56:36
 */

'use strict';

(function(angular, $){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('LoginCtrl', ['$scope', '$state', '$notify', '_$account', function($scope, $state, $notify, _$account){

        var vm = this;
        
        vm.formOptions = {
            form: 'loginForm',
            submitted: false,
            loginName: '',
            loginPassword: ''
        };

        vm.login = function(event){
            event && event.stopPropagation();

            vm.formOptions.submitted = true;
            if(vm.formOptions.form.$invalid){
                return;
            }

            var params = {
                loginName: $.trim(vm.formOptions.loginName),
                loginPassword: $.trim(vm.formOptions.loginPassword)
            };

            _$account.login(params).then(function(data){
                $state.go('kaleido.album');
            });

        };

    }]);

})(angular, jQuery);