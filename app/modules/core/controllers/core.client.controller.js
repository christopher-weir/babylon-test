'use strict';

angular.module('core').controller('CoreCtrl', [
    '$scope',
    '$state',
    function( $scope, $state ) {

        $scope.isActiveView = function( _view ){
            if( _view === $state.current.name ){
                return 'is-active';
            }
        };
    }
]);
