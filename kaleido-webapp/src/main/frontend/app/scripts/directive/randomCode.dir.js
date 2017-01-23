/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-23 15:41:03
 */

'use strict';

(function(angular, $){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.directive('randomCode', [function(){

        return {
            restrict: 'AE',
            scope: {
                callback: '&'
            },
            replace: true,
            templateUrl: 'views/template/random-code.tpl.html',
            link: function(scope, element, attrs){

                scope.codes = generateCode();

                scope.refreshCode = function(event){
                    event && event.stopPropagation();

                    scope.codes = generateCode();
                };

            }

        };

        function generateCode(){

            var codes = [];

            for(var i = 0; i < 4; i++){
                var random = Math.random();
                codes.push(Math.floor(random * 10));
            }
            
            return codes;
        }

    }]);

})(angular, jQuery);