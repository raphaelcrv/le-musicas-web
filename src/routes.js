angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  //todo - create a 404 page and add to otherwise
  $urlRouterProvider.otherwise('/home');
  
  // home page
  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home'
    })
}
