'use strict';

// in the time constraints of the bab test
// i am just going to do super simple tests to
// show i at least know how to do them
describe('core modules tests', function() {

    var ProfessionalsService;

    beforeEach(module('core'));

    beforeEach(inject(function(_ProfessionalsService_) {

        ProfessionalsService = _ProfessionalsService_;
    }));


    describe('ProfessionalsService', function() {

        it('Should return an object and be defined', function(){

            var avaliable = ProfessionalsService.getAvaliable();

            expect( avaliable )
                .toEqual(jasmine.any(Object));

            expect( avaliable.gp )
                .toBeDefined();

            expect( avaliable.gp )
                .toBeDefined();

        });

    });


});
