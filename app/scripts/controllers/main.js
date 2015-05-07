
'use strict';
var repo={
    "book":
    [
		{
			"bookname":"The Art of Computer Programming,",
			"vicename":"Volume 1: Fundamental Algorithms",
			"description":"By Donald Knuth(3rd Edition, 1997) . For anyone with a mathematical predilection, Volumes 1 and 3 (\"Sorting and Searching\") stand out as true bibles of the industry.",
      		"picture":"images/TheArtofComputerProgramming.jpg"
		},
    {
			"bookname":"Structure and Interpretation",
			"vicename":"of Computer Programs",
			"description":"By Harold Abelson, Gerald Sussman, and Julie Sussman(2nd Edition, 1996). Concentrates on breaking big problems down into little ones, and ensuring the pieces come back to build the whole. The book is available under the Creative Commons Noncommercial License, for free on the web.",
      		"picture":"images/wizard.jpg"
		},
		{
			"bookname":"Refactoring:",
			"vicename":"Improving the Design of Existing Code",
			"description":"By Martin Fowler, Kent Beck, John Brant, and William Opdyke (1999). Shows you how to rebend a programming pretzel, taking poorly designed code and turning it into something even humans can understand.",
      		"picture":"images/refactor.jpg"
		}
	]
}
/**
 * @ngdoc function
 * @name webLiteReaderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webLiteReaderApp
 */
angular.module('webLiteReaderApp')
  .controller('MainCtrl', function ($scope) {
    $scope.books = repo;
  });
