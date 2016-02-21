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

                    var i = 0;
                    var p = 0;

                    scope.currentProfessional = null;

                    var findNextAvaliable = function( _professionals ){

                        var temp = 0;
                        var lowest = Number.POSITIVE_INFINITY;
                        var nextAval = {};

                        for ( i = 0; i < _professionals.length; i++) {

                            if ( _professionals[i].avaliable ) {
                                for ( p = 0; p <  _professionals[i].avaliable.length; p++) {

                                    temp = _professionals[ i ].avaliable[ p ];

                                    if( temp < lowest ){
                                        lowest = temp;
                                        nextAval = _professionals[ i ];
                                    }
                                }
                            }
                        }
                        scope.currentProfessional = nextAval;
                        scope.setProfessional( nextAval );
                    };



                    scope.setProfessional = function( _user ){
                        scope.ngModel = _user;
                    };


                    scope.$watch('professionals', function() {

                        if( scope.professionals ){
                            console.log('find next avaliable and set as the default');
                            findNextAvaliable( scope.professionals );
                        }
                    });

                },

                templateUrl:   'app/modules/book-consultation/views/professional-users.client.view.html'
            };
        }
    ]
);
