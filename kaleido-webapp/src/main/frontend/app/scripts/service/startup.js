/**
 *@Author: chad.ding@vipshop.com
 *@Copyright: 2008-2016 VIPSHOP.COM|唯品会
 *@Date: 2017-01-09 16:36:53
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