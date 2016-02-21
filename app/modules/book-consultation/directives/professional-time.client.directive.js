'use strict';

angular.module('book-consultation')
    .directive('professionalTime', [
        function(  ) {
            return {

                restrict: 'A',
                require: 'ngModel',
                scope: {
                    times : '=times',
                    ngModel: '='
                },
                link: function(scope, element, attrs, ngModel ) {
                    var i = 0;

                    scope.time = null;


                    var findNextAvaliable = function( _times ){

                        var temp = 0;
                        var lowest = Number.POSITIVE_INFINITY;

                        for ( i = 0; i < _times.length; i++) {

                            temp = _times[ i ];

                            if( temp < lowest ){
                                lowest = temp;
                            }
                        }

                        scope.time = lowest;
                    };


                    scope.$watch('times', function() {
                        if( scope.times ){
                            findNextAvaliable( scope.times );
                        }
                    });
                },

                templateUrl:   'app/modules/book-consultation/views/professional-times.client.view.html'
            };
        }
    ]
);
