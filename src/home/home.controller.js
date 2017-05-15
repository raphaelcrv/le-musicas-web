angular
  .module('app')
  .component('home', {
    templateUrl: 'home/home.html',
    controller: function ($scope, $http, $state, $mdToast) {
      this.hello = 'Hello World! home controller!';

      // clear input for new search
      $scope.clearSearch = function () {
          $scope.searchValue = "";
      };

      $scope.eventKey = function () {
          $scope.goSearch();
      };

      // todo - criar service para request
      $scope.goSearch = function(){
        if($scope.searchValue != undefined && $scope.searchValue != ''){
          $state.go('home.search', {search:  $scope.searchValue});
        }else{
          $mdToast.show(
            $mdToast.simple()
              .textContent('Digite o nome ou artista da musica!')
              .position('top right')
              .hideDelay(4000)
          );
        }
      }

    }
  });
