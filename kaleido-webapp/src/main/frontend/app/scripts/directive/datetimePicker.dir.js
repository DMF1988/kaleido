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

                var date = scope.datetime || new Date(),
                    dateStr = $filter('date')(date, 'dd/MM/yyyy');

                $(element).find('#date-store').daterangepicker({
                    singleDatePicker: true,
                    calender_style: "picker_1",
                    startDate: moment()
                }, function(start, end, label) {
                    scope.$apply(function(){
                        scope.datetime = new Date(start._d).getTime();
                    });
                    
                });

                $(element).find('#date-store').val(dateStr);

            }
        };
    }]);

})(angular, window, jQuery);
