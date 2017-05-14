angular
  .module('app')
  .component('search', {
    templateUrl: 'home/search/search.html',
    controller: function ($stateParams, $scope, $http, $state) {
			this.hello = 'Hello World! Hme!';

      if($stateParams.search != null){
        $scope.loading = true;
        $http.get("https://api.vagalume.com.br/search.excerpt?q="+$stateParams.search+"&limit=10")
        .then(function(response) {          
            // todo - tratar os erros 
            $scope.results = response.data.response.docs;
            $scope.loading = false;
            console.log($scope.results);
        });
      }else{
        $state.go('home.popular');
      }

      $scope.showLyrics = function (title, band){
         $state.go('home.lyrics', {title: title, band : band});
      }


    }
});
