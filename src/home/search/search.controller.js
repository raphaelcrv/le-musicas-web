angular
  .module('app')
  .component('search', {
    templateUrl: 'home/search/search.html',
    controller: function ($stateParams, $scope, $http, $state) {
			this.hello = 'Hello World! Hme!';

      if($stateParams.search != undefined){
        $scope.loading = true;
        $http.get("https://api.vagalume.com.br/search.excerpt?q="+$stateParams.search+"&limit=10")
        .then(function(response) {    
            $scope.results = response.data.response.docs;
            $scope.loading = false;
            $scope.isEmpty = false;
            if($scope.results.length == 0){
              $scope.isEmpty = true;
            }            
        });
      }else{
        $state.go('home');
      }

      $scope.showLyrics = function (title, band){
         $state.go('home.lyrics', {title: title, band : band});
      }


    }
});
