/**
 *@Author: chad.ding
 *@Copyright: 2008-2016 CHAD | 丁铭锋
 *@Date: 2017-02-09 21:08:05
 */

'use strict';

(function(angular) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.directive('pagination', [function() {

        return {
            restrict: 'AE',
            scope: {
                pageNum: '=',
                totalPage: '=',
                turnPage: '&'
            },
            templateUrl: 'views/template/pagination.tpl.html',
            replace: true,
            link: function($scope, element, attrs) {

                $scope.pageItem = [];

                $scope.$watch('totalPage', function(nValue, oValue) {
                    if (nValue === oValue) {
                        return;
                    }

                    generatePage();
                });

                function generatePage() {

                    var size = $scope.totalPage,
                        num = $scope.pageNum;
                    $scope.pageItem = [];

                    if (size <= 10) {
                        for (var i = 1; i <= size; i++) {
                            $scope.pageItem.push(i);
                        }
                        return;
                    }

                    var halfSize = Math.ceil(size / 2);
                    if (num <= halfSize) {
                        if (num <= 5) {
                            $scope.pageItem = [1, 2, 3, 4, 5, 6, 7, 8, '...', size];
                        } else {

                            $scope.pageItem = [1, '...'];
                            for (var i = num - 2; i <= num + 3; i++) {
                                $scope.pageItem.push(i);
                            }
                            $scope.pageItem.push('...');
                            $scope.pageItem.push(size);
                        }
                    } else {
                        $scope.pageItem = [1, '...'];
                        if (size - num <= 7) {
                            for (var i = size - 7; i <= size; i++) {
                                $scope.pageItem.push(i);
                            }
                        } else {
                            for (var i = num - 3; i <= num + 2; i++) {
                                $scope.pageItem.push(i);
                            }
                            $scope.pageItem.push('...');
                            $scope.pageItem.push(size);
                        }
                    }

                }

                generatePage();

                $scope.turn = function(num, event) {
                    event && event.stopPropagation();

                    var pageNum = num;

                    if (num === $scope.pageNum) {
                        return;
                    } else if (num === 'previous') {
                        if ($scope.pageNum === 1) {
                            return;
                        }
                        pageNum = --$scope.pageNum;
                    } else if (num === 'next') {
                        if ($scope.pageNum === $scope.totalPage) {
                            return;
                        }
                        pageNum = ++$scope.pageNum;
                    } else if (isNaN(num)) {
                        return;
                    } else {
                        $scope.pageNum = num;
                    }

                    $scope.turnPage({ pageNum: pageNum });
                    generatePage();
                };
            }
        };

    }]);

})(angular);
