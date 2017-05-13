angular
  .module('app')
  .component('home', {
    templateUrl: 'home/home.html',
    controller: function ($scope) {
      this.hello = 'Hello World! Hme!';
    }
  });
