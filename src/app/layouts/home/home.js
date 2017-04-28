/**
 * Home page
 */

'use strict';

/**
 * Controller
 */
class HomeController {
    constructor($log, AuthService, PageService, $state) {
        'ngInject';

        this.$log = $log;
        this.$state = $state;
        this.AuthService = AuthService;
        this.PageService = PageService;

        if (this.$state.current.name !== 'home')
            this.PageService.setActivePage(this.$state.current.name.substr(5));
    }
}

/**
 * Component
 */
export const home = {
    controller: HomeController,
    controllerAs: 'hc',
    template: require('./home.html')
};
