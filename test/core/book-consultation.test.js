'use strict';

// in the time constraints of the bab test
// i am just going to do super simple tests to
// show i at least know how to do them
describe('book-consultation modules tests', function() {

    var FormHelpersService;

    beforeEach(module('book-consultation'));

    beforeEach(inject(function(_FormHelpersService_) {
        FormHelpersService = _FormHelpersService_;
    }));


    describe('FormHelpersService', function() {

        it('findNextAvaliableTime: Should return a number and be equal', function(){

            var times = [
                12,
                13433,
                42,
                55,
                500
            ];

            var time = FormHelpersService.findNextAvaliableTime( times );

            expect( time )
                .toEqual(jasmine.any(Number));

            expect( time )
                .toBe(12);

        });

    });


    describe('FormHelpersService', function() {

        it('findNextAvaliableProfessional: Should return an Object and be equal', function(){

            var professionals = [
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
            ];

            var professional = FormHelpersService.findNextAvaliableProfessional( professionals );

            expect( professional )
                .toEqual(jasmine.any(Object));



            expect( professional.name )
                .toBeDefined();

            expect( professional.name )
                .toEqual('dr 3');

        });

    });


});
