angular
  .module('app')
  .component('lyrics', {
		templateUrl: 'home/lyrics/lyrics.html',
    controller: function ($http, $stateParams, $scope, $state) {
      this.hello = 'Hello World! Hme!';
			console.log('lyrics');

			if($stateParams.title != null && $stateParams.band != null ){
				// creating obj music
				$scope.music = {
					title : $stateParams.title,
					band : $stateParams.band
				}

				// request return full lyrics
				$http.get("https://api.vagalume.com.br/search.php?art="+$scope.music.band+"&mus="+$scope.music.title+"&apikey={c9b424edc82806e396757c5c65958d51}")
				.then(function(response) {          
					$scope.lyrics = response.data.mus[0].text;
					console.log($scope.lyrics);
					// replace all breaklines from tag </br>
					$scope.lyrics = $scope.lyrics.replace(/(\r\n|\n|\r)/gm, " <br/>")
					console.log($scope.lyrics)
				});
			}else{
				$state.go('home.popular')
			}

		}
});