/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-18 15:39:11
 */

'use strict';

(function(angular, $){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('UpdateEmailCtrl', ['$scope', '$state', '$notify', '_$user', function($scope, $state, $notify, _$user){

    	var vm = this;

    	vm.formOptions = {
    		form: 'updateEmailForm',
    		submitted: false,
    		loginName: '',
    		newLoginName: '',
    		loginPassword: ''
    	};

    	vm.ok = function(event){
    		event && event.stopPropagation();

    		vm.formOptions.submitted = true;
    		if(vm.formOptions.form.$invalid){
    			return;
    		}

    		if($.trim(vm.formOptions.loginName) === $.trim(vm.formOptions.newLoginName)){
    			$notify.warn('输入新旧邮箱相同');
    			return;
    		}

    		var params = {
    			oldEmail: $.trim(vm.formOptions.loginName),
    			newEmail: $.trim(vm.formOptions.newLoginName),
    			password: md5($.trim(vm.formOptions.loginPassword))
    		};

    		_$user.updateEmail(params).then(function(){
    			$state.go('login');
    		});

    	};


    	vm.cancel = function(event){
    		event && event.stopPropagation();

    		$state.go('kaleido.profile.stage');
    	};

    }]);

})(angular, jQuery);