'use strict';

angular.module('book-consultation').controller('FormDrsModalCtrl', [
    '$scope',
    '$rootScope',
    function( $scope, $rootScope ) {

        $scope.professionals = $scope.$parent.professionals;

        $scope.setProfessional = function( _professional ){
            $scope.$parent.setProfessional( _professional );
            $rootScope.$broadcast( 'close-modal' );
        };
    }
]);
