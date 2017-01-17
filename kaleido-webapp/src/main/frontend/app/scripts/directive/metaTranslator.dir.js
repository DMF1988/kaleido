/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-17 17:43:58
 */

'use strict';

(function(angular){

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.directive('metaTranslator', ['_$meta', function(_$meta){

        return {
            restrict: 'AE',
            scope: {
                group: '@',
                meta: '='
            },
            link: function(scope, element, attrs){

                scope.$watch('meta', function(nValue, oValue){
                    if(nValue === oValue){
                        return;
                    }
                    var params = {
                        parent: scope.group,
                        value: scope.meta
                    };
                    _$meta.getMetaDetail(params).then(function(res){

                        element.text(res.data.text);
                        
                    });
                });
            }
        }

    }]);

})(angular);