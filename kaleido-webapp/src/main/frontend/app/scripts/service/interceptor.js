/**
 *@Author: chad.ding@vipshop.com
 *@Copyright: 2008-2016 VIPSHOP.COM|唯品会
 *@Date: 2016-12-12 10:26:25
 */

'use strict';

(function(angular) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.factory('$exceptionInterceptor', ['$q', function($q) {

        return {
            request: function(config) {
                return config;
            },
            requestError: function(error) {
                noty({ text: error.message, type: 'error' });
                return $q.reject(error);
            },
            response: function(res) {

                if(res.data.error){
                    noty({ text: res.data.error.message, type: 'error' });
                    return $q.reject(res);
                }

                return res;
            },
            responseError: function(error) {
                var msg = '';
                if(error.data && error.data.error && error.data.error.message){
                    msg = error.data.error.message;
                }else{
                    msg = error.statusText; 
                }

                noty({ text: msg, type: 'error' });
                return $q.reject(error);
            }
        };

    }]);

})(angular);
