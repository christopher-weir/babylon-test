'use strict';

angular.module('core')
    .directive('addModal', [
        '$rootScope',
        function( $rootScope ) {
            return {
                restrict: 'E',
                scope:{
                    title : '=?title',
                },
                controller : '@',
                name: 'controllerName',
                link: function(scope, element, attrs ) {

                    scope.contentUrl = '';

                    scope.cancel = function(){
                        angular.element( element ).remove();
                    };


                    $rootScope.$on('close-modal', function() {
                        angular.element( element ).remove();
                    });

                    attrs.$observe( 'ver',function(v){
                       scope.contentUrl = v;
                    });
                },
                template: '<div class="modal">' +
                    '<div class="mdl-dialog" >' +
                        '<header>' +
                        '<h4 class="mdl-dialog__title">{{ title }}</h4>' +
                        '</header>' +
                        '<div class="mdl-dialog__content" ng-include="contentUrl">' +
                        '</div>' +
                        '<div class="mdl-dialog__actions">' +
                            '<button type="button" class="mdl-button" ng-click="cancel()">cancel</button>' +
                        '</div>' +
                    '</div>' +
                    '<div class="backdrop">' +
                    '</div>' +
                '</div>'
            };
        }
    ]
);
