angular
  .module('app')
  .component('search', {
    templateUrl: 'home/search/search.html',
    controller: function ($scope) {
        $scope.search = 'search';
        console.log('searchLoaded')
    }
});
