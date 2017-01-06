/**
 *@Author: chad.ding@vipshop.com
 *@Copyright: 2008-2016 VIPSHOP.COM|唯品会
 *@Date: 2016-12-12 16:04:51
 */

'use strict';

(function(angular){

	var kaleidoApp = angular.module('kaleidoApp');

	kaleidoApp.provider('$notify', function(){

		return {
			$get: ['$modal', function($modal){

				var icons = {
					confirm: 'glyphicon-question-sign',
					info: 'glyphicon-info-sign',
					warn: 'glyphicon-warning-sign',
					error: 'glyphicon-ban-circle'
				};

				function error(text){
					var options = {
						type: 'error',
						title: '错误警告',
						text: text || ''
					};

					notifyFactory(options);
				}

				function warn(text){
					var options = {
						type: 'warn',
						title: '警告信息',
						text: text || ''
					};

					notifyFactory(options);
				}

				function info(text){
					var options = {
						type: 'info',
						title: '信息提示',
						text: text || ''
					};

					notifyFactory(options);
				}

				function confirm(text, callback){
					
					var options = {
						type: 'confirm',
						title: '确认提示',
						text: text || ''
					},

					promise = notifyFactory(options);
					if(angular.isFunction(callback)){
						promise.then(function(){
							callback.call();
						});
					}
				}

				function notifyFactory(notifyOptions){

					var icon = icons[notifyOptions.type];
					var template = '<div class="modal-content notify">'+
										'<div class="modal-header">'+
											'<button ng-click="cancel($event)" type="button" class="close"><span>×</span></button>'+
											'<h4 class="modal-title">'+notifyOptions.title+'</h4>'+
										'</div>'+
										'<div class="modal-body text-center">'+
											'<i class="glyphicon '+icon+' '+notifyOptions.type+'"></i>&nbsp;&nbsp;'+notifyOptions.text+
										'</div>',
					    footer = '<div class="modal-footer">',
					    html = '';

					switch(notifyOptions.type){
						case 'info':
							html = template+footer+'</div></div>'; break;
						case 'confirm':
							footer += '<button class="btn btn-success mrg0" ng-click="confirmed()">确认</button>&nbsp;&nbsp;<button class="btn btn-default" ng-click="cancel()">取消</button></div>';
							html = template+footer+'</div>'; break;
						case 'warn':
							html = template+footer+'</div></div>'; break;
						case 'error':
							html = template+footer+'</div></div>'; break;
						default:
							throw new Error('调用错误');
					}

					return $modal.open({
						template: html,
						controller: ['$scope', '$modalInstance', '$timeout', function($scope, $modalInstance, $timeout){

							if(['info', 'warn', 'error'].indexOf(notifyOptions.type) !== -1){
								$scope.isNote = true;
								$timeout(function(){
									$scope.cancel();
								}, 2000);
							}

							$scope.cancel = function(){
								$modalInstance.dismiss();
							};

							$scope.confirmed = function(){
								$modalInstance.close();
							};
						}]
					}).result;
				}

				return {
					confirm: confirm,
					info: info,
					warn: warn,
					error: error
				};
			}]
		};

	});

})(angular);