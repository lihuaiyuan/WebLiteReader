'use strict';

/**
 * @ngdoc function
 * @name webLiteReaderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webLiteReaderApp
 */
angular.module('webLiteReaderApp')
  .controller('MainCtrl', function ($scope) {
    $scope.books = [
      '三国演义',
      '水浒传',
      '红楼梦',
      '西游记'
    ];
  });
