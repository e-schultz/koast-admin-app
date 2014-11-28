'use strict';


angular.module('koastAdminApp', [
  'koast',
  'ui.router',
  'koastAdminApp.service'
])
.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl'
        });
      $urlRouterProvider.otherwise('/');
    }
  ]);

angular.module('koastAdminApp.service',[])
.value('ADMIN_DISCOVERY_PATH','TODO')
.value('KOAST_ROOT','http://TODO/api/')
.run(function(koastAdmin){
  koastAdmin.load();
});
