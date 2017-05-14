angular
  .module('app')
  .component('popular', {
    templateUrl: 'home/popular/popular.html',
    controller: function ($scope) {
        $scope.popular = 'Popular';
        console.log('popularLoaded')
    }
});
