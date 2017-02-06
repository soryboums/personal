/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'personal.home', [
  'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    parent: 'app',
    url: '/home',
    views: {
      "main@": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html',
        controllerAs: 'ctrl'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

// A factory to download the resume from the server,
// Do not use a direct xhr request, it does not support downloading
// Use $window instead
.factory('Resume', ['$q', '$timeout', '$window', function Resume($q, $timeout, $window){
  return {
    download: function(){
      var defer = $q.defer();
      $timeout(function(){
        $window.location = 'api/resume';
      }, 1000)
      .then(function(){
        defer.resolve('Resume downloaded successfully');
      }, function(error){
        defer.reject(error);
      });
      return defer.$promise;
    }
  };
}])

// A factory to send message
.factory('Message', ['$resource', function Message($resource){
  return $resource('api/message', {}, {});
}])

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', ['Resume', 'Message', '$log', function HomeController(Resume, Message, $log) {
  var self = this;
  self.msgObj = {};
  self.resume = resume;
  self.sendMsg = sendMsg;

  function resume(event){
    event.preventDefault();
    Resume.download().then(function(success){
      $log.info(success);
    }, function(error){
      $log.error(error);
    });
  }

  function sendMsg(event){
    event.preventDefault();
    Message.save(self.msgObj);
  }

}]);
