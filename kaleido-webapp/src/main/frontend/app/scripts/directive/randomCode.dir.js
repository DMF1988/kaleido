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
                match: '='
            },
            replace: true,
            templateUrl: 'views/template/random-code.tpl.html',
            link: function(scope, element, attrs){

                scope.inputCode = '';

                scope.codes = generateCode();

                scope.refreshCode = function(event){
                    event && event.stopPropagation();

                    scope.codes = generateCode();
                };

                scope.$watch('inputCode+codes', function(nValue, oValue){
                    if(nValue === oValue){
                        return;
                    }

                    scope.match = $.trim(scope.inputCode) === scope.codes.join('');
                });

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