/**
 * Secret page
 */

'use strict';

/**
 * Controller
 */
class SecretController {

    constructor($log, AuthService) {
        'ngInject';
        this.AuthService = AuthService;
        this.$log = $log;
    }
};

/**
 * Component
 */
export const secret = {
    controller: SecretController,
    controllerAs: 'scc',
    template: require('./secret.html')
};
