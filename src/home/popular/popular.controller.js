angular
	.module('app')
	.component('popular', {
		templateUrl: 'home/popular/popular.html',
		controller: function () {
			this.hello = 'Hello World! Hme!';
		}
});
