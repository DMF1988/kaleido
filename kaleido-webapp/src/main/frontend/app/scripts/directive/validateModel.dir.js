/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:53:32
 */

'use strict';

(function(angular) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.directive('validateModel', ['$timeout', function($timeout) {

        return {
            restrict: 'AE',
            scope: true,
            require: 'ngModel',
            link: function($scope, element, attrs, ngModel) {

                if (!$scope.validate || typeof $scope.validate !== 'function') {
                    console.error('Validate function is not provided,directive stop working...');
                    return;
                }

                var timer = null;
                $(element).keyup(function(event) {

                    if (timer !== null) {
                        $timeout.cancel(timer);
                    }

                    timer = $timeout(function() {

                        if ($.trim(ngModel.$modelValue) === '') {
                            ngModel.$setValidity('validation', true);
                            return;
                        }

                        $scope.validate(ngModel.$modelValue).then(function(data) {
                            ngModel.$setValidity('validation', data);
                        });

                    }, 1000);

                });
            }
        };

    }]);
})(angular);
