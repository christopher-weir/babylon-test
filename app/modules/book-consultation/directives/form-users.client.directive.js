'use strict';

angular.module('book-consultation')
    .directive('formUsers', [
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

                    // TODO
                    // this could be abstracted out more
                    // but there are time constraints
                    scope.openModal = function(){

                        var modalTemplate = '<add-modal' +
                            ' view="app/modules/book-consultation/views/form-users-modal.client.view.html"' +
                            ' controller-name="FormUsersModalCtrl"' +
                            ' title="\'Add User\'"></add-modal>';
                        angular.element(
                            document.getElementById('add-modal')
                        ).append(
                            $compile(modalTemplate)(scope)
                        );
                    };

                    scope.setUser = function( _user ){
                        scope.ngModel = _user;
                    };

                    scope.isActive = function( _user ){
                        if ( scope.ngModel === _user ) {
                            return 'active';
                        }
                    };

                    scope.$on('$destroy', function() {
                        // cleanup
                        scope.familyMembers = [];
                    });

                },
                templateUrl:   'app/modules/book-consultation/views/form-users.client.view.html'
            };
        }
    ]
);
