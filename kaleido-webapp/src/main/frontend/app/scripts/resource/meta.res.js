/**
 *@Author: chad.ding
 *@Copyright: 2008-2016 CHAD | 丁铭锋
 *@Date: 2017-01-15 14:24:02
 */

'use strict';

(function(angular, window){

	var kaleidoApp = angular.module('kaleidoApp');

	kaleidoApp.factory('_$meta', ['$resource', function($resource){

		var resource = {
			//获取用户信息
            getCountryMeta: $resource('meta/country.json', {}, { get: { method: 'GET' } }),
            //获取中国省市信息
            getCityCN: $resource('meta/CN.json', {}, { get: { method: 'GET' } }),
            //获取字典信息
            getMetaByParent: $resource(window.HOST + '/meta/getByParent', {}, { get: { method: 'GET' } }),
            //获取字典信息
            getMetaDetail: $resource(window.HOST + '/meta/getMetaDetail', {}, { get: { method: 'GET' } })
		};

		function getCountryMeta(params){

			var q = resource.getCountryMeta.get().$promise;
			return q.then(function(res){
				var data = {};
				for(var key in res){
					if(!isNaN(key)){
						data[key] = res[key];
						delete res[key];
					}
				}
				res.data = data;

				return res;
			});

		}

		function getCityCN(params){

			var q = resource.getCityCN.get(params).$promise;
			return q.then(function(res){
				var data = {};
				for(var key in res){
					if(!isNaN(key)){
						data[key] = res[key];
						delete res[key];
					}
				}
				res.data = data;
				return res;
			});

		}

		function getMetaByParent(params){
			var q = resource.getMetaByParent.get(params).$promise;

			return q;
		}

		function getMetaDetail(params){
			var q = resource.getMetaDetail.get(params).$promise;
			return q;
		}

		return {
			getCountryMeta: getCountryMeta,
			getCityCN: getCityCN,
			getMetaByParent: getMetaByParent,
			getMetaDetail: getMetaDetail
		};

	}]);

})(angular, window);