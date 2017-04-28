/**
 * Top
 */

'use strict';

/**
 * Controller
 */
class TopController {
    constructor($log, $state, AuthToken, AuthService, PageService) {
        'ngInject';

        this.$log = $log;
        this.$state = $state;
        this.AuthToken = AuthToken;
        this.AuthService = AuthService;
        this.PageService = PageService;
    }

    /**
     * Logs user out by sending request to API
     * @returns {Promise}
     */
    logout() {
        this.AuthService.isAuthenticated = false;
        this.AuthToken.deleteToken();
        this.PageService.removeActivePage();
        this.$state.go('login');
    }
    goHome() {
        this.PageService.removeActivePage();
        this.$state.go('home');
    }

    get activePage() {
        return this.PageService.getActivePage();
    }
}

/**
 * Component
 */
export const top = {
    controller: TopController,
    controllerAs: 'tc',
    bindings: {
        content: '='
    },
    template: require('./top.html')
};
