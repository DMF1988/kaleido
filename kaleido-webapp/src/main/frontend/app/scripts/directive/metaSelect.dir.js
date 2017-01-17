/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-17 15:40:35
 */

'use strict';

(function(angular){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.directive('metaSelect', ['_$meta', function(_$meta){

        return {
            restrict: 'AE',
            template: '<select ng-model="value" ng-options="item.value as item.text for item in commonInfo.metas" class="form-control"></select>',
            replace: true,
            scope: {
                group: '@',
                value: '='
            },
            link: function(scope, element, attrs){

                scope.commonInfo = {
                    metas: []
                };

                var params = {
                    parent: scope.group
                };

                _$meta.getMetaByParent(params).then(function(res){

                    scope.commonInfo.metas = res.data;
                });

            }
        };

    }]);

})(angular);