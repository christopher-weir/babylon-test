'use strict';

angular.module('book-consultation')
    .directive('formDrs', [
        '$compile',
        'FormHelpersService',
        function( $compile, FormHelpersService ) {
            return {

                restrict: 'A',
                require: 'ngModel',
                scope: {
                    professionals : '=professionals',
                    ngModel: '='
                },
                link: function(scope, element, attrs, ngModel ) {

                    scope.currentProfessional = null;

                    // set the next avaliable professional
                    var setNextAvaliable = function( _professionals ){

                        // services are easier to test in angular
                        scope.setProfessional( FormHelpersService.findNextAvaliableProfessional( _professionals ) );
                    };



                    // TODO
                    // this could be abstracted out more
                    // but there are time constraints
                    scope.openModal = function(){

                        var modalTemplate = '<add-modal' +
                            ' view="app/modules/book-consultation/views/form-drs-modal.client.view.html"' +
                            ' controller-name="FormDrsModalCtrl"' +
                            ' title="\'Select Dr\'"></add-modal>';
                        angular.element(
                            document.getElementById('add-modal')
                        ).append(
                            $compile(modalTemplate)(scope)
                        );
                    };


                    // set the professional in the model
                    scope.setProfessional = function( _user ){
                        scope.currentProfessional = _user;
                        scope.ngModel = _user;
                    };


                    scope.$watch('professionals', function() {

                        if( scope.professionals ){
                            setNextAvaliable( scope.professionals );
                        }
                    });

                },

                templateUrl:   'app/modules/book-consultation/views/form-drs.client.view.html'
            };
        }
    ]
);
