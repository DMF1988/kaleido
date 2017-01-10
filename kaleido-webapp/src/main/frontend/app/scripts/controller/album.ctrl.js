/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:50:57
 */

'use strict';

(function(angular, $, WebUploader, window) {

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

        $timeout(function() {

            var uploader = WebUploader.create({
                auto: true,
                server: window.HOST+'/album/update',
                pick: '#filePicker',
                accept: {
                    title: 'Images',
                    extensions: 'gif,jpg,jpeg,bmp,png',
                    mimeTypes: 'image/*'
                }
            });

            var $list = $('#fileList');

            uploader.on('fileQueued', function(file) {
                var $li = $(
                        '<div id="' + file.id + '" class="file-item thumbnail">' +
                        '<img>' +
                        '<div class="info">' + file.name + '</div>' +
                        '</div>'
                    ),
                    $img = $li.find('img');


                // $list为容器jQuery实例
                $list.append($li);

                // 创建缩略图
                // 如果为非图片文件，可以不用调用此方法。
                // thumbnailWidth x thumbnailHeight 为 100 x 100
                uploader.makeThumb(file, function(error, src) {
                    if (error) {
                        $img.replaceWith('<span>不能预览</span>');
                        return;
                    }

                    $img.attr('src', src);
                }, 100, 100);
            });

            uploader.on('uploadProgress', function(file, percentage) {
                var $li = $('#' + file.id),
                    $percent = $li.find('.progress span');

                // 避免重复创建
                if (!$percent.length) {
                    $percent = $('<p class="progress"><span></span></p>')
                        .appendTo($li)
                        .find('span');
                }

                $percent.css('width', percentage * 100 + '%');
            });

            // 文件上传成功，给item添加成功class, 用样式标记上传成功。
            uploader.on('uploadSuccess', function(file) {
                $('#' + file.id).addClass('upload-state-done');
            });

            // 文件上传失败，显示上传出错。
            uploader.on('uploadError', function(file) {
                var $li = $('#' + file.id),
                    $error = $li.find('div.error');

                // 避免重复创建
                if (!$error.length) {
                    $error = $('<div class="error"></div>').appendTo($li);
                }

                $error.text('上传失败');
            });

            // 完成上传完了，成功或者失败，先删除进度条。
            uploader.on('uploadComplete', function(file) {
                $('#' + file.id).find('.progress').remove();
            });

        }, 500);

    }]);

})(angular, jQuery, WebUploader, window);
