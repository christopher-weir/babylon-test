'use strict';

angular.module('book-consultation').controller('FormAppointmentModalCtrl', [
    '$scope',
    '$rootScope',
    function( $scope, $rootScope ) {

        $scope.times = $scope.$parent.times;
        // $scope.professionals = $scope.$parent.professionals;
        //
        $scope.setTime = function( _time ){
            $scope.$parent.setTime( _time );
            $rootScope.$broadcast( 'close-modal' );
        };
    }
]);
