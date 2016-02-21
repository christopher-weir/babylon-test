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
                                200,
                                2001
                            ]
                        },
                        {
                            name: 'dr 3',
                            avaliable: [
                                300,
                                3001
                            ]
                        },
                        {
                            name: 'dr 2',
                            avaliable: [
                                100,
                                1001
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
