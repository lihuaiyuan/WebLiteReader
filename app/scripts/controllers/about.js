'use strict';

/**
 * @ngdoc function
 * @name webLiteReaderApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webLiteReaderApp
 */
angular.module('webLiteReaderApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
