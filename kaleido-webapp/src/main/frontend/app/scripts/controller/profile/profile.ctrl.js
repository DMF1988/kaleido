/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:51:26
 */

'use strict';

(function(angular, $) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('ProfileCtrl', ['$scope', '$uibModal', '_$profile', function($scope, $uibModal, _$profile) {

        var vm = this;

        init();

        function init() {

            getProfile();

            $scope.$on('$userUpdateSuccess', function() {
                getProfile();
            });

            $('div#portrait').mouseenter(function() {
                $('div.portrait-tool').slideDown();
            }).mouseleave(function() {
                $('div.portrait-tool').slideUp();
            });
        }

        vm.uploadPortrait = function(event) {
            event && event.stopPropagation();

            $uibModal.open({
                templateUrl: 'views/template/upload-portrait.tpl.html',
                backdrop: 'static',
                size: 'lg',
                controllerAs: 'vm',
                controller: ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
                    var vm = this;

                    setTimeout(function() {
                        var image = document.getElementById('image-portrait');
                        var cropper = new Cropper(image, {
                            aspectRatio: 16 / 9,
                            crop: function(e) {
                                console.log(e.detail.x);
                                console.log(e.detail.y);
                                console.log(e.detail.width);
                                console.log(e.detail.height);
                                console.log(e.detail.rotate);
                                console.log(e.detail.scaleX);
                                console.log(e.detail.scaleY);
                            }
                        });
                    }, 1000);

                    vm.cancel = function(event) {
                        event && event.stopPropagation();
                        $uibModalInstance.dismiss();
                    };

                }]
            });
        };

        function getProfile() {
            var params = {
                userId: $scope.userInfo.userId
            };

            _$profile.getProfileInfo(params).then(function(res) {
                $scope.profile = res.data;
                $scope.$broadcast('$profileLoadSuccess');
            });
        }

    }]);
})(angular, jQuery);
