'use strict';

angular.module('book-consultation').controller('FormUsersModalCtrl', [
    '$scope',
    '$rootScope',
    function( $scope, $rootScope ) {

        $scope.newUserName = '';


        $scope.addNewUser = function( _userName ){
            $rootScope.$broadcast('add-user', {
                name: _userName,
                img: './img/user.png'
            });
            $rootScope.$broadcast( 'close-modal' );
        };
    }
]);
