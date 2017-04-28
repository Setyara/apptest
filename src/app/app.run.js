/**
 * Run Function
 */

'use strict';


export function appRun($rootScope, $state, $window) {
    'ngInject';

    /**
     * Logic for blocking user from going to protected states
     */
    const stateChangeErrorCallback = $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
        if (error.auth === false) {
            $state.go('login');
        }
    });

    var oauthErrorCallback = $rootScope.$on('oauth:error', () => {
        $state.go('login');
    });

    /* Destroy section */
    $rootScope.$on('$destroy', stateChangeErrorCallback);
    $rootScope.$on('$destroy', oauthErrorCallback);

}
