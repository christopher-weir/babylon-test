'use strict';


angular.module('core')
    .factory('UserService', [
        function (  ) {

            // dummy data
            var currentUser = {
                name: 'Tom Erica',
                img: './img/user.png',
                history: [
                    {
                        time: 1000
                    }
                ]
            };

            var currentUserFamily = [
                {
                    name: 'Bee Erma',
                    img: './img/user.png',
                    history: []
                },
                {
                    name: 'Garfield Tammy',
                    img: './img/user.png',
                    history: []
                }
            ];


            return {
                /**
                 * getCurrentUser
                 * @method function
                 * @return {Object} Return the current user
                 */
                getCurrentUser: function(){

                    // I dont know how you render your pages or send the user
                    // data, so here is an example of an angular http get
                    // $http({
                    //     method: 'GET',
                    //     url: 'user/current'
                    // })
                    // .then(
                    //     callback,
                    //     errorCallback
                    // );

                    return currentUser;
                },

                /**
                 * getUserFamily
                 * @method function
                 * @return {Array} An array of the users family
                 */
                getUserFamily: function(){
                    // Again im only guessing you use a REST api
                    return currentUserFamily;
                },

                /**
                 * getUserFamily
                 * @method function
                 * @return {Array} An array of the users family
                 */
                getUsers: function(){
                    // Again im only guessing you use a REST api
                    return [
                        {
                            name: 'Tom Erica',
                            img: './img/user.png',
                            history: []
                        },
                        {
                            name: 'Bee Erma',
                            img: './img/user.png',
                            history: []
                        },
                        {
                            name: 'Garfield Tammy',
                            img: './img/user.png',
                            history: []
                        }
                    ];
                }

            };
        }
    ]);
