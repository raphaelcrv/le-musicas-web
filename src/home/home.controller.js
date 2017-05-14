angular
  .module('app')
  .component('home', {
    templateUrl: 'home/home.html',
    controller: function ($scope, $http, $state, $mdToast) {
      this.hello = 'Hello World! Hme!';
      //console.log('loaded');
      $scope.searchValue = '';

      // todo - criar service para request
      $scope.goSearch = function(){
        console.log($scope.searchValue);
        if($scope.searchValue != ''){
          $state.go('home.search', {search:  $scope.searchValue});
        }else{
          $mdToast.show(
            $mdToast.simple()
              .textContent('Digite o nome da musica!')
              .position('top right')
              .hideDelay(3000)
          );
        }
        // $scope.loading = true;
        // $http.get("https://api.vagalume.com.br/search.excerpt?q="+$scope.searchValue+"&limit=10")
        // .then(function(response) {          
        //     // todo - tratar os erros 
        //     $scope.result = response.data.response.docs;
        //     $scope.loading = false;
        // });
      }

      // todo - criar service para request
      //todo - criar constante api url
      //todo - mover codigo abaixo para a view lyrics
      // https://api.vagalume.com.br/search.php?art=U2&mus=one&apikey={key}
      // $scope.lyrics = '';
      // $scope.getLyrics = function(){
      //   console.log('lycris')
      //   $http.get("https://api.vagalume.com.br/search.php?art=Twenty One Pilots&mus=Stressed Out&apikey={c9b424edc82806e396757c5c65958d51}")
      //   .then(function(response) {          
      //     $scope.lyrics = response.data.mus[0].text;
      //     console.log($scope.lyrics);

      //     $scope.teste = $scope.lyrics.replace(/(\r\n|\n|\r)/gm, " <br/>")
      //     console.log($scope.teste)
      //   });

      // }


    }
  });
