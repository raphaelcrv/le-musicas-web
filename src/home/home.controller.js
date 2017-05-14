angular
  .module('app')
  .component('home', {
    templateUrl: 'home/home.html',
    controller: function ($scope, $http, $state, $mdToast) {
      this.hello = 'Hello World! Hme!';
      //console.log('loaded');
      //$scope.searchValue = '';

      // todo - criar service para request
      $scope.goSearch = function(){
        console.log($scope.searchValue);
        if($scope.searchValue != undefined){
          $state.go('home.search', {search:  $scope.searchValue});
        }else{
          $mdToast.show(
            $mdToast.simple()
              .textContent('Digite o nome da musica!')
              .position('top right')
              .hideDelay(3000)
          );
        }
      }


    }
  });
