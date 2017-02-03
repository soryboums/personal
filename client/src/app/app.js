angular.module( 'personal', [
  'templates-app',
  'templates-common',
  'personal.home',
  'personal.navbar',
  'personal.about',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.config(['$stateProvider','$urlRouterProvider', function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $stateProvider.state( 'app', {
    abstract: true,
    views: {
      "navbar@": {
        controller: 'NavbarCtrl',
        controllerAs: 'ctrl',
        templateUrl: 'navbar/navbar.tpl.html'
      }
    }
  });
  $urlRouterProvider.otherwise( '/home' );
}])

.run( function run () {
})

.controller( 'AppCtrl', ['$scope', '$location', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | personal' ;
    }
  });
}]);
