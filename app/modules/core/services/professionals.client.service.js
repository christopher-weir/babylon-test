'use strict';


angular.module('core')
    .factory('ProfessionalsService', [
        function (  ) {

            var professionals = {
                gp: {
                    label: 'GP',
                    subLabel: 'Male',
                    professionals: [
                        {
                            name: 'dr 1',
                            avaliable: [
                                1456038000000,
                                1456039800000,
                                1456043400000
                            ]
                        },
                        {
                            name: 'dr 3',
                            avaliable: [
                                1456038000000,
                                1455953400000,
                                1455952500000,
                                1455963300000
                            ]
                        },
                        {
                            name: 'dr 2',
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

                    ]
                },
                therapist: {
                    label: 'Therapist',
                    subLabel: 'subLabel',
                    professionals: [

                    ]
                },
                specialist: {
                    label: 'Specialist',
                    professionals: [

                    ]
                }
            };

            return {

                getAvaliable: function(){
                    return professionals;
                }

            };
        }
    ]);
