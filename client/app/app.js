'use strict';

angular.module('meanExampleAppApp', [
  'meanExampleAppApp.auth',
  'meanExampleAppApp.admin',
  'meanExampleAppApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
