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
    $scope.books = {
      names:
      [
      'The Art of Computer Programming,',
      'Structure and Interpretation ',
      'Refactoring: '
      ]
    };
  });
