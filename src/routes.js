angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  //todo - create a 404 page and add to otherwise
  $urlRouterProvider.otherwise('/home/popular');
  
  // home page
  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home'
    })

    $stateProvider
    .state('home.popular', {
      url: '/popular',
      component: 'popular'
    })

    // state search
    $stateProvider
    .state('home.search', {
      url: '/search',
      params: {
        search: null
      },
      component: 'search'
    })

    // state lyrics
    $stateProvider
    .state('home.lyrics', {
      url: '/lyrics',
      params: {
        title: null,
        band: null
      },
      component: 'lyrics'
    })

}
