/**
 *@Author: chad.ding@vipshop.com
 *@Copyright: 2008-2016 VIPSHOP.COM|唯品会
 *@Date: 2017-01-09 11:35:27
 */

'use strict';

(function(angular){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('ProfileCtrl', ['$scope', '$notify', '_$profile', function($scope, $notify, _$profile){

        var vm = this;

        init();

        function init(){
            vm.commonInfo = {
                profile: {}
            };

            var params = {
                userId: 20170107000000
            };
            _$profile.getProfileInfo(params).then(function(data){
                vm.commonInfo.profile = data.data;
            });
        }

    }]);
})(angular);