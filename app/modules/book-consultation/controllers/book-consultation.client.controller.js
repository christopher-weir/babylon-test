'use strict';

angular.module('book-consultation').controller('BookConsultationCtrl', [
    '$scope',
    'ProfessionalsService',
    function( $scope, ProfessionalsService ) {
        console.log('this is working book-consultation');

        $scope.consultationForm = null;

        $scope.consultationFormData = {
            user: {},
            professionalType: {}
        };




        $scope.professionals = ProfessionalsService.getAvaliable();


        $scope.familyMembers = [
            {
                name: 'bob',
                img: './img/test.jpg'
            },
            {
                name: 'bob 2',
                img: './img/test.jpg'
            }
        ];

    }
]);
