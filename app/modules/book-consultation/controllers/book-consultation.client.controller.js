'use strict';

angular.module('book-consultation').controller('BookConsultationCtrl', [
    '$scope',
    '$rootScope',
    'ProfessionalsService',
    function( $scope, $rootScope, ProfessionalsService ) {
        console.log('this is working book-consultation');

        $scope.consultationForm = null;

        $scope.consultationFormData = {
            user: {},
            professionalType: {},
            time: null
        };


        $rootScope.$on('add-user', function(event, args) {
            $scope.familyMembers.push( args );
        });


        $scope.professionals = ProfessionalsService.getAvaliable();


        $scope.familyMembers = [
            {
                name: 'bob',
                img: './img/user.png'
            },
            {
                name: 'bob 2',
                img: './img/user.png'
            }
        ];

    }
]);
