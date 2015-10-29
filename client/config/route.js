export default function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dashboard', {url: '/', templateUrl: '/views/dashboard.html'});

}
