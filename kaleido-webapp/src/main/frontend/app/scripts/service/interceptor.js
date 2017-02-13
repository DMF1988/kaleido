/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:51:58
 */

'use strict';

(function(angular) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.factory('$exceptionInterceptor', ['$q', '$rootScope', function($q, $rootScope) {

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
                }else if(res.data && res.data.data === 'SESSION_TIMEOUT'){
                    $rootScope.$broadcast('$sessionTimeout');
                    return;
                }
                
                return res;
            },
            responseError: function(error) {
                var msg = '';
                if(error.data){
                    msg = error.data.msg;
                }else{
                    msg = error.statusText; 
                }

                noty({ text: msg, type: 'error' });
                return $q.reject(error);
            }
        };

    }]);

})(angular);
