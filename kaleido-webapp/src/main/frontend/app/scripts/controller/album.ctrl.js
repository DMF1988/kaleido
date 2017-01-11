/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:50:57
 */

'use strict';

(function(angular, window) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.controller('AlbumCtrl', ['$scope', '$http', '$uibModal', '$templateCache', function($scope, $http, $uibModal, $templateCache) {

        var vm = this;

        vm.createAlbum = function(event) {

            event && event.stopPropagation();

            $uibModal.open({
                templateUrl: 'views/album/create-album-modal.tpl.html',
                size: 'lg',
                backdrop: 'static',
                controller: 'CreateAlbumModalCtrl as vm'
            });

        };

        $http({
            url: 'views/template/image-uploader.tpl.html',
            mthod: 'GET'
        }).then(function(data){
            $templateCache.put('views/template/image-uploader.tpl.html', data.data);
        });

    }]);

    kaleidoApp.controller('CreateAlbumModalCtrl', ['$scope', '$uibModalInstance', '$timeout', function($scope, $uibModalInstance, $timeout) {

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

        $scope.$on('$uploadComplete', function(){
            $uibModalInstance.dismiss();
        });

    }]);

})(angular, window);
