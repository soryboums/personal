angular.module( 'personal', [
  'templates-app',
  'templates-common',
  'personal.home',
  'personal.navbar',
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

.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      var idToScroll = attrs.ref;
      $elm.on('click', function() {
        var $target;
        if (idToScroll) {
          $target = angular.element(document.getElementById(idToScroll));
        } else {
          $target = $elm;
        }
        $("body").animate({scrollTop: $target.prop('offsetTop') - 50}, 'slow');
      });
    }
  };
})

.directive("scroll", ['$window', function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var navHeight = $window.innerHeight - 40;
            if ($window.pageYOffset > navHeight) {
              angular.element(document.getElementsByClassName("navbar-default")).addClass('on');
            } else {
              angular.element(document.getElementsByClassName("navbar-default")).removeClass('on');
            }
            scope.$apply();
        });
    };
}])

.controller( 'AppCtrl', ['$scope', '$location', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | personal' ;
    }
  });
}]);
