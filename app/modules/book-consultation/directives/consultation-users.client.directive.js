'use strict';

angular.module('book-consultation')
    .directive('consultationUsers', [
        function(  ) {
            return {

                restrict: 'A',
                require: 'ngModel',
                scope: {
                    familyMembers : '=family',
                    ngModel: '='
                },
                link: function(scope, element, attrs, ngModel ) {

                    scope.addUser = function(){
                        scope.familyMembers.push({
                            name: 'bob 3',
                            img: './img/test.jpg'
                        });
                    };

                    scope.setUser = function( _user ){
                        scope.ngModel = _user;
                    };

                },

                template:   '' +
                    '<li ng-repeat="user in familyMembers" ng-click="setUser( user )">' +
                        '<div class="user-img">' +
                            '<img />' +
                        '</div>' +
                        '<div>' +
                            '<p>' +
                                '{{ user.name }}' +
                            '</p>' +
                        '</div>' +
                    '</li>' +
                    '<li class="form--user-add" ng-click="addUser()">' +
                        'add' +
                    '</li>'
            };
        }
    ]
);
