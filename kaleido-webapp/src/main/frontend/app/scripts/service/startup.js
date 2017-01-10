/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:52:04
 */

'use strict';

(function(angular){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.factory('$startup', ['$rootScope', '$MENUS', function($rootScope, $MENUS){

        return {
            setLisener: function(){

                $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){

                    var currentState = toState.name;
                    $rootScope.menus.forEach(function(item){
                        item.active = currentState.indexOf(item.key) !== -1;
                    });
                   
                });
            },
            start: function(){

                $rootScope.menus = $MENUS;
                $rootScope.userId = 1;
                this.setLisener();

            }
        };

    }]);
})(angular);