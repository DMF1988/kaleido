/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:50:57
 */

'use strict';

(function(angular, window) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('AlbumCtrl', ['$scope', '$uibModal', function($scope, $uibModal) {

        var vm = this;

        vm.createAlbum = function(event) {

            event && event.stopPropagation();

            $uibModal.open({
                templateUrl: 'views/album/upload-image.tpl.html',
                size: 'lg',
                backdrop: 'static',
                controller: 'UploadImageCtrl as vm'
            });

        };

    }]);

    kaleidoApp.controller('UploadImageCtrl', ['$scope', '$uibModalInstance', '$timeout', function($scope, $uibModalInstance, $timeout) {

        var vm = this;

        vm.cancel = function(event) {
            event && event.stopPropagation();
            $uibModalInstance.dismiss();
        };

        vm.commonInfo = {
            uploadPath: window.HOST+'/album/upload'
        };

        vm.formOptions = {
            imageList: []
        };

    }]);

})(angular, window);
