'use strict';

angular.module('book-consultation')
    .directive('professionalTypes', [
        function(  ) {
            return {

                restrict: 'A',
                require: 'ngModel',
                scope: {
                    professionals : '=professionals',
                    ngModel: '='
                },

                link: function(scope, element, attrs, ngModel ) {

                    scope.setType = function( _type ){
                        scope.ngModel = _type;
                    };



                    scope.isActive = function( _type ){
                        if ( scope.ngModel === _type ) {
                            return 'active';
                        }
                    };

                },

                templateUrl:   'app/modules/book-consultation/views/professional-types.client.view.html'
            };
        }
    ]
);
