'use strict';


// Setting up routes
angular.module('core').config([
    '$stateProvider',
    '$urlRouterProvider',

    function( $stateProvider, $urlRouterProvider  ) {

        $urlRouterProvider.otherwise('/');

        // Home state routing
        $stateProvider
        .state('home', {
            url: '/',
            controller: 'CoreCtrl',
            templateUrl: 'app/modules/core/views/home.client.view.html'
        })
        .state('book-consultation', {
            url: '/book-consultation',
            controller: 'BookConsultationCtrl',
            templateUrl: 'app/modules/book-consultation/views/book-consultation.client.view.html'
        });
    }
]);
