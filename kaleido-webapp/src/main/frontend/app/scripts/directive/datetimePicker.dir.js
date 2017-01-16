/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-16 11:32:35
 */

'use strict';

(function(angular, window, $) {

    var kaleidoApp = angular.module('kaleidoApp');
    kaleidoApp.directive('datetimePicker', ['$filter', function($filter) {

        return {
            restrict: 'AE',
            replace: true,
            scope: {
                datetime: '='
            },
            templateUrl: 'views/template/datetime-picker.html',
            link: function(scope, element, attrs) {

                scope.dateStr = $filter('date')(scope.datetime, 'dd/MM/yyyy');

                scope.$watch('dateStr', function(nValue, oValue){
                    if(nValue === oValue){
                        return;
                    }

                    scope.datetime = new Date(scope.dateStr).getTime();
                });

                $(element).find('#date-store').daterangepicker({
                    singleDatePicker: true,
                    calender_style: "picker_1"
                }, function(start, end, label) {
                    console.log(start.toISOString(), end.toISOString(), label);
                });

            }
        };
    }]);

})(angular, window, jQuery);
