'use strict';

angular.module('book-consultation')
    .directive('professionalUsers', [
        function(  ) {
            return {

                restrict: 'A',
                require: 'ngModel',
                scope: {
                    professionals : '=professionals',
                    ngModel: '='
                },
                link: function(scope, element, attrs, ngModel ) {

                    scope.currentProfessional = null;

                    scope.setProfessional = function( _user ){
                        scope.ngModel = _user;
                    };


                    scope.$watch('professionals', function() {

                        if( scope.professionals ){
                            console.log('find next avaliable and set as the default');
                        }
                    });

                },

                templateUrl:   'app/modules/book-consultation/views/professional-users.client.view.html'
            };
        }
    ]
);
