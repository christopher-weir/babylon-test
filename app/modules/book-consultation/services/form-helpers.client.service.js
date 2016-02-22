'use strict';

// basic service of helpers for the bab form
angular.module('book-consultation')
    .factory('FormHelpersService', [
        function (  ) {

            return {

                /**
                 * findNextAvaliableProfessional
                 * Loop through the drs and their times to find the next avaliable
                 * @method function
                 * @param  {Array} _professionals  Array of the professionals
                 * @return {Object}                The next avaliable
                 * professional by time 'avaliable'
                 */
                findNextAvaliableProfessional: function( _professionals ){

                    var i = 0;
                    var p = 0;

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
                    return nextAval;
                },

                /**
                 * findNextAvaliableTime
                 * Loop through the times and find the
                 * next avaliable
                 * @method function
                 * @param  {Array} _times The selected prof times
                 * @return {Number}        The next avaliable
                 */
                findNextAvaliableTime: function( _times ){

                    var i = 0;
                    var temp = 0;
                    var lowest = Number.POSITIVE_INFINITY;

                    for ( i = 0; i < _times.length; i++) {

                        temp = _times[ i ];

                        if( temp < lowest ){
                            lowest = temp;
                        }
                    }

                    return lowest;
                }

            };
        }
    ]);
