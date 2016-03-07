angular.module('myApp', ['ngAnimate'])
  .controller('transitionController', function($scope) {
    $scope.pies = [
      'frangipanne',
      'ham and mustard',
      'peas with leaks',
      'toasted teacake',
      'katsup',
      'haml',
      'teriyaki supreme'
    ];
  });
