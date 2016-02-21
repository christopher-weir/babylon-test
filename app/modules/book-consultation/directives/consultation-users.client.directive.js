'use strict';

angular.module('book-consultation')
    .directive('consultationUsers', [
        '$compile',
        function( $compile ) {
            return {

                restrict: 'A',
                require: 'ngModel',
                scope: {
                    familyMembers : '=family',
                    ngModel: '='
                },
                link: function(scope, element, attrs, ngModel ) {

                    scope.addUser = function(){

                        var generatedTemplate = '<add-modal ver="app/modules/book-consultation/views/add-user.client.view.html" controller-name="AddUserCtrl" title="\'Add User\'"></add-modal>';
                        angular.element(document.getElementById('space-for-buttons')).append($compile(generatedTemplate)(scope));


                        // scope.familyMembers.push({
                        //     name: 'bob 3',
                        //     img: './img/user.png'
                        // });
                    };

                    scope.setUser = function( _user ){
                        scope.ngModel = _user;
                    };

                    scope.isActive = function( _user ){
                        if ( scope.ngModel === _user ) {
                            return 'active';
                        }
                    };

                },
                templateUrl:   'app/modules/book-consultation/views/consultation-users.client.view.html'
            };
        }
    ]
);
