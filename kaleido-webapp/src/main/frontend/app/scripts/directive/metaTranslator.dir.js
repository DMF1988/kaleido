/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-17 17:43:58
 */

'use strict';

(function(angular) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.directive('metaTranslator', ['_$meta', function(_$meta) {

        return {
            restrict: 'AE',
            scope: {
                group: '@',
                meta: '='
            },
            link: function(scope, element, attrs) {

                if (!!scope.meta) {
                    translate();
                }

                scope.$watch('meta', function(nValue, oValue) {
                    if (nValue === oValue || nValue === null) {
                        return;
                    }
                    translate();
                });

                function translate() {
                    var params = {
                        parent: scope.group,
                        value: scope.meta
                    };
                    _$meta.getMetaDetail(params).then(function(res) {

                        element.text(res.data.text);

                    });
                }
            }
        };

    }]);

})(angular);
