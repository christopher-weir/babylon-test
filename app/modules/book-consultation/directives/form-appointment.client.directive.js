'use strict';

angular.module('book-consultation')
    .directive('formAppointment', [
        '$compile',
        'FormHelpersService',
        function( $compile, FormHelpersService ) {
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

                        scope.setTime( FormHelpersService.findNextAvaliableTime( _times ) );
                    };



                    // TODO
                    // this could be abstracted out more
                    // but there are time constraints
                    scope.openModal = function(){

                        var modalTemplate = '<add-modal' +
                            ' view="app/modules/book-consultation/views/form-appointment-modal.client.view.html"' +
                            ' controller-name="FormAppointmentModalCtrl"' +
                            ' title="\'Select Appointment\'"></add-modal>';
                        angular.element(
                            document.getElementById('add-modal')
                        ).append(
                            $compile(modalTemplate)(scope)
                        );
                    };


                    // set the professional in the model
                    scope.setTime = function( _time ){
                        scope.time = _time;
                        scope.ngModel = _time;
                    };


                    scope.$watch('times', function() {
                        if( scope.times ){
                            findNextAvaliable( scope.times );
                        }
                    });
                },

                templateUrl:   'app/modules/book-consultation/views/form-appointment.client.view.html'
            };
        }
    ]
);
