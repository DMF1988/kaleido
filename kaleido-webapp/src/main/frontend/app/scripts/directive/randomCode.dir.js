/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-23 15:41:03
 */

'use strict';

(function(angular, $){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.directive('randomCode', ['$timeout', function($timeout){

        return {
            restrict: 'AE',
            scope: {
                match: '='
            },
            replace: true,
            templateUrl: 'views/template/random-code.tpl.html',
            link: function(scope, element, attrs){

                scope.commonInfo = {
                    timer: null,
                    clock: 0,
                    inputCode: '',
                    codes: []
                };

                scope.commonInfo.codes = generateCode();
                scope.refreshCode = function(event){
                    event && event.stopPropagation();

                    scope.commonInfo.codes = generateCode();
                    scope.commonInfo.clock = 10;
                    scope.commonInfo.inputCode = '';
                    click();
                };

                scope.$watch('commonInfo.inputCode+commonInfo.codes', function(nValue, oValue){
                    if(nValue === oValue){
                        return;
                    }

                    scope.match = $.trim(scope.commonInfo.inputCode) === scope.commonInfo.codes.join('');
                });

                scope.$on('$refreshCode', function(){
                    scope.commonInfo.inputCode = '';
                    scope.commonInfo.codes = generateCode();
                });

                function click(){

                    if(scope.commonInfo.clock <= 0){
                        $timeout.cancel(scope.commonInfo.timer);
                        scope.commonInfo.timer = null;
                        return;
                    }

                    scope.commonInfo.timer = $timeout(function(){
                        scope.commonInfo.clock--;
                        click();
                    }, 1000);
                }

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