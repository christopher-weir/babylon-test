'use strict';

angular.module('book-consultation').controller('BookConsultationCtrl', [
    '$scope',
    '$rootScope',
    'UserService',
    'ProfessionalsService',
    function( $scope, $rootScope, UserService, ProfessionalsService ) {

        $scope.consultationForm = null;
        $scope.showSuccess = false;

        // construct the initial users list
        $scope.familyMembers = [
            {
                name: 'Tom Erica',
                img: './img/user.png',
                history: []
            },
            {
                name: 'Bee Erma',
                img: './img/user.png',
                history: []
            },
            {
                name: 'Garfield Tammy',
                img: './img/user.png',
                history: []
            }
        ];

        // Get the avaliable professionals
        $scope.professionals = ProfessionalsService.getAvaliable();

        // initial form data
        $scope.consultationFormData = {
            user: {},
            professionalType: {},
            time: null
        };

        $scope.book = function(){
            $scope.showSuccess = true;
        };


        // listen for the add user call
        $rootScope.$on('add-user', function(event, args) {
            $scope.familyMembers.push( args );
        });

    }
]);
