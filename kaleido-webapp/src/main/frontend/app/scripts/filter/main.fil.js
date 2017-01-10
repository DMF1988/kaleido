/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:54:44
 */

'use strict';

(function(angular){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.filter('subStr', [function(){

        return function(input, len){

            if(!angular.isString || input.length <= len){
                return input;
            }

            return input.subStr(0, len)+'...';
        };

    }]);

})(angular);