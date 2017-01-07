/**
 * Created by chad.ding on 2017/1/6.
 */

'use strict';

(function(angular) {

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['kaleidoApp']);
    });

    angular.module('kaleidoApp', [
            'ng',
            'ngResource',
            'ngRoute',
            'ngAnimate',
            'ui.bootstrap',
            'ui.router'
        ])
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.defaults.headers.common['Context-Type'] = 'application/json;charset=utf-8';

            //$httpProvider.interceptors.push('$exceptionInterceptor');
        }])
        .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

            $urlRouterProvider
                .when('/', '/help')
                .otherwise('/');

            $stateProvider
                .state('help', {
                    url: '/help',
                    templateUrl: 'views/help.html',
                    controller: 'HelpCtrl as vm'
                });
        }])
        .run(['$rootScope', function($rootScope){
            $rootScope.showInfo = function(){
                alert('hahahhaa');
            };
        }]);

})(angular);
