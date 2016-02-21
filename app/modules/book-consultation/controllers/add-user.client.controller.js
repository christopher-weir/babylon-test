'use strict';

angular.module('book-consultation').controller('AddUserCtrl', [
    '$scope',
    '$rootScope',
    function( $scope, $rootScope ) {

        $scope.newUser = {
            name: '',
            img: './img/user.png'
        };


        $scope.addNewUser = function( _user ){
            console.log(_user);
            $rootScope.$broadcast('add-user', _user );
            $rootScope.$broadcast( 'close-modal' );
        };
    }
]);
