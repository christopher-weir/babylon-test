'use strict';

angular.module('book-consultation').controller('FormUsersModalCtrl', [
    '$scope',
    '$rootScope',
    function( $scope, $rootScope ) {

        $scope.newUser = {
            name: '',
            img: './img/user.png'
        };


        $scope.addNewUser = function( _user ){
            $rootScope.$broadcast('add-user', _user );
            $rootScope.$broadcast( 'close-modal' );
        };
    }
]);
