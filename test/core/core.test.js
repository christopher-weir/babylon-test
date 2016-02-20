'use strict';

describe('core test', function() {
    console.log('working');



    var scope;
    var ctrl;

    beforeEach(module('core'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('CoreCtrl', {$scope: scope});
    }));

    it('bob should be true', function(){
        expect(scope.bob).toBe(true);
    });


});
