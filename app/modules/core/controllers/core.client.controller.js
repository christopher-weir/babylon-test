'use strict';

angular.module('core').controller('CoreCtrl', [
    '$scope',
    function( $scope ) {
        console.log('this is working');

        $scope.bob = true;
    }
]);
