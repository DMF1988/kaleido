/**
 * Created by chad.ding on 2017/1/6.
 */

'use strict';

(function(angular, window) {

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
                .state('album', {
                    url: '/album/:userId',
                    templateUrl: 'views/album.html',
                    controller: 'AlbumCtrl as vm'
                })
                .state('diary', {
                    url: '/diary/:userId',
                    templateUrl: 'views/diary.html',
                    controller: 'DiaryCtrl as vm'
                })
                .state('profile', {
                    url: '/profile/:userId',
                    templateUrl: 'views/profile.html',
                    controller: 'ProfileCtrl as vm'
                })
                .state('help', {
                    url: '/help',
                    templateUrl: 'views/help.html',
                    controller: 'HelpCtrl as vm'
                });
        }])
        .run(['$startup', function($startup){
            
            window.HOST = window.HOST || '/kaleido-webapp';

            $startup.start();
        }]);

})(angular, window);
