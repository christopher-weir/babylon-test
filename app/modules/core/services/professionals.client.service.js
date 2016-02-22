'use strict';


angular.module('core')
    .factory('ProfessionalsService', [
        function (  ) {

            // dummy data
            // I this is only a quick gues with random names for the
            // sake of the test
            var professionals = {
                gp: {
                    label: 'GP',
                    subLabel: 'Male',
                    professionals: [
                        {
                            name: 'Buster Ronny',
                            avaliable: [
                                1456038000000,
                                1456039800000,
                                1456043400000
                            ]
                        },
                        {
                            name: 'Shad Skyler',
                            avaliable: [
                                1456038000000,
                                1455953400000,
                                1455952500000,
                                1455963300000
                            ]
                        },
                        {
                            name: 'Cecil Keegan',
                            avaliable: [
                                1455974100000,
                                1455956100000,
                                1455977700000
                            ]
                        }
                    ]
                },
                nurse: {
                    label: 'Nurse',
                    professionals: [
                        {
                            name: 'Matt Geoffrey',
                            avaliable: [
                                1456038000000,
                                1456039800000,
                                1456043400000
                            ]
                        },
                        {
                            name: 'Briscoe Reenie',
                            avaliable: [
                                1456038000000,
                                1455953400000,
                                1455952500000,
                                1455963300000
                            ]
                        },
                        {
                            name: 'Misti Hayleigh',
                            avaliable: [
                                1455974100000,
                                1455956100000,
                                1455977700000
                            ]
                        }
                    ]
                },
                therapist: {
                    label: 'Therapist',
                    professionals: [
                        {
                            name: 'Abbey Phyllis',
                            avaliable: [
                                1456038000000,
                                1456039800000,
                                1456043400000
                            ]
                        },
                        {
                            name: 'Bronte Stu',
                            avaliable: [
                                1456038000000,
                                1455953400000,
                                1455952500000,
                                1455963300000
                            ]
                        },
                        {
                            name: 'Calanthia Elea',
                            avaliable: [
                                1455974100000,
                                1455956100000,
                                1455977700000
                            ]
                        }
                    ]
                },
                specialist: {
                    label: 'Specialist',
                    professionals: [
                        {
                            name: 'Tamara Lucetta',
                            avaliable: [
                                1456038000000,
                                1456039800000,
                                1456043400000
                            ]
                        },
                        {
                            name: 'Gorden Lesia',
                            avaliable: [
                                1456038000000,
                                1455953400000,
                                1455952500000,
                                1455963300000
                            ]
                        },
                        {
                            name: 'Sharleen Unity',
                            avaliable: [
                                1455974100000,
                                1455956100000,
                                1455977700000
                            ]
                        }
                    ]
                }
            };

            return {

                /**
                 * getAvaliable
                 * @method function
                 * @return {Object} The currently avaliable professionals
                 */
                getAvaliable: function(){
                    // put a http get here to the rest api
                    return professionals;
                }

            };
        }
    ]);
