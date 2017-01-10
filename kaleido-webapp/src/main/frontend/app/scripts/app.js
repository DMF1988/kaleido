/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:52:17
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

            $httpProvider.interceptors.push('$exceptionInterceptor');
        }])
        .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

            $urlRouterProvider
                .when('/', '/kaleido/album')
                .otherwise('/login');

            $stateProvider
                .state('kaleido', {
                    url: '/kaleido',
                    templateUrl: 'views/kaleido.html',
                    controller: 'KaleidoCtrl as vm',
                    abstract: true
                })
                .state('kaleido.album', {
                    url: '/album',
                    templateUrl: 'views/album/album.html',
                    controller: 'AlbumCtrl as vm'
                })
                .state('kaleido.diary', {
                    url: '/diary',
                    templateUrl: 'views/diary/diary.html',
                    controller: 'DiaryCtrl as vm'
                })
                .state('kaleido.profile', {
                    url: '/profile',
                    templateUrl: 'views/profile/profile.html',
                    controller: 'ProfileCtrl as vm'
                })
                .state('help', {
                    url: '/help',
                    templateUrl: 'views/help.html',
                    controller: 'HelpCtrl as vm'
                })
                .state('signup', {
                    url: '/signup',
                    templateUrl: 'views/signup.html',
                    controller: 'SignupCtrl as vm'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl as vm'
                });
        }])
        .run(['$startup', function($startup){
            
            window.HOST = window.HOST || '/kaleido-webapp';

        }]);

})(angular, window);
