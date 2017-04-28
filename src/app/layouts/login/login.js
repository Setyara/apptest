/**
 * Login page
 */

'use strict';

/**
 * Controller
 */
class LoginController {
    constructor($log, AuthService) {
        'ngInject';

        this.AuthService = AuthService;
        this.$log = $log;
    }
}

/**
 * Component
 */
export const login = {
    controller: LoginController,
    controllerAs: 'lc',
    template: require('./login.html')
};
