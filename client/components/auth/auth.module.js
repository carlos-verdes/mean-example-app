'use strict';

angular.module('meanExampleAppApp.auth', [
  'meanExampleAppApp.constants',
  'meanExampleAppApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
