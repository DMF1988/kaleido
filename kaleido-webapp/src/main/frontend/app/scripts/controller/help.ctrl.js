/**
 *@Author: chad.ding
 *@Copyright: 2008-2016 CHAD | 丁铭锋
 *@Date: 2017-01-07 18:50:38
 */

'use strict';

(function(angular){

	var kaleidoApp = angular.module('kaleidoApp');

	kaleidoApp.controller('HelpCtrl', ['$scope', '$notify', function($scope, $notify){
		var vm = this;

		vm.showInfo = function(){
			$notify.warn('AAAAA', function(){
				alert('dddddd');
			});
		};

	}]);

})(angular);