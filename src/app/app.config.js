/**
 * Config Function
 *
 */
'use strict';

import { InterceptionConfig } from './services/auth.interceptor';

export function appConfig($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    /**
     * Routes
     */
    $stateProvider
        .state('login', {
            url: '/',
            template: '<login></login>'
        })
        .state('home', {
            url: '/home',
            template: '<home></home>',
            resolve: {
                auth: ($q, AuthService) => {
                    'ngInject';
                    if (AuthService.isAuthenticated) {
                        return $q.resolve({auth: true});
                    } else {
                        return $q.reject({auth: false});
                    }
                }
            }
        })
        .state('home.page', {
            url: '/page',
            template: '<page></page>',
        })
        .state('home.setting', {
            url: '/setting',
            template: '<setting></setting>'
        })
        .state('home.secret', {
            url: '/secret',
            template: '<secret></secret>',
        })

        .state('error', {
            url: '/error',
            template: '<h3>Wrong page!</h3>'
        });
    /** show error **/
    $urlRouterProvider.otherwise('/error');
    $httpProvider.interceptors.push(InterceptionConfig);
    /** remove hash from url **/
    $locationProvider.html5Mode(true);
}
