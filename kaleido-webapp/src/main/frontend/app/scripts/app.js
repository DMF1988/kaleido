/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:52:17
 */

'use strict';

(function(angular, window) {

    window.HOST = window.HOST || '/kaleido-webapp';

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['kaleidoApp']);
    });

    angular.module('kaleidoApp', [
            'ng',
            'ngResource',
            'ngRoute',
            'ngCookies',
            'ngStorage',
            'ngAnimate',
            'ui.bootstrap',
            'ui.router'
        ])
        .config(['$httpProvider', '$qProvider' function($httpProvider, $qProvider) {
            $httpProvider.defaults.headers.common['Context-Type'] = 'application/json;charset=utf-8';
            $httpProvider.interceptors.push('$exceptionInterceptor');

            $qProvider.errorOnUnhandledRejections(false);  //this code to avoid console show error message when http request failed or rejected.
        }])
        .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

            $urlRouterProvider
                .when('/', '/kaleido/monitor')
                .otherwise('/login');

            $stateProvider
                .state('kaleido', {
                    url: '/kaleido',
                    templateUrl: 'views/kaleido.html',
                    controller: 'KaleidoCtrl as vm',
                    abstract: true
                })
                .state('kaleido.monitor', {
                    url: '/monitor',
                    templateUrl: 'views/monitor/monitor.html',
                    controller: 'MonitorCtrl as vm'
                })
                .state('kaleido.footstep', {
                    url: '/footstep',
                    templateUrl: 'views/footstep/footstep.html',
                    controller: 'FootstepCtrl as vm'
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
                .state('kaleido.friend', {
                    url: '/friend',
                    templateUrl: 'views/friend/friend.html',
                    controller: 'FriendCtrl as vm',
                    abstract: true
                })
                .state('kaleido.friend.list', {
                    url: '/list',
                    templateUrl: 'views/friend/friend-list.html',
                    controller: 'FriendListCtrl as vm'
                })
                .state('kaleido.friend.pending', {
                    url: '/pending',
                    templateUrl: 'views/friend/pending-list.html',
                    controller: 'PendingListCtrl as vm'
                })
                .state('kaleido.friend.blacklist', {
                    url: '/blacklist',
                    templateUrl: 'views/friend/black-list.html',
                    controller: 'BlackListCtrl as vm'
                })
                .state('kaleido.profile', {
                    url: '/profile',
                    templateUrl: 'views/profile/profile.html',
                    controller: 'ProfileCtrl as vm',
                    abstract: true
                })
                .state('kaleido.profile.stage', {
                    url: '/stage',
                    templateUrl: 'views/profile/profile-stage.html',
                    controller: 'ProfileStageCtrl as vm'
                })
                .state('kaleido.profile.updateProfile', {
                    url: '/updateProfile',
                    templateUrl: 'views/profile/update-profile.html',
                    controller: 'UpdateProfileCtrl as vm'
                })
                .state('kaleido.profile.updateEmail', {
                    url: '/updateEmail',
                    templateUrl: 'views/profile/update-email.html',
                    controller: 'UpdateEmailCtrl as vm'
                })
                .state('kaleido.profile.updatePassword', {
                    url: '/updatePassword',
                    templateUrl: 'views/profile/update-password.html',
                    controller: 'UpdatePasswordCtrl as vm'
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
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl as vm'
                })
                .state('help', {
                    url: '/help',
                    templateUrl: 'views/help.html',
                    controller: 'HelpCtrl as vm'
                });
        }])
        .run(['$setting', function($setting) {

            $setting.startup();

        }]);

})(angular, window);
