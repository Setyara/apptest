/**
 * Sidebar
 */

'use strict';

/**
 * Controller
 */
class SidebarController {
    constructor($log, $state, PageService) {
        'ngInject';

        this.$log = $log;
        this.$state = $state;
        this.PageService = PageService;
    }

    get nav() {
        return this.PageService.getPages();
    }

    goTo(page) {
        this.PageService.setActivePage(page);
        this.$state.go('home.' + page.slug);
    }

    goHome() {
        this.$state.go('home');
    }
}

/**
 * Component
 */
export const sidebar = {
    controller: SidebarController,
    controllerAs: 'sc',
    bindings: {
        content: '='
    },
    template: require('./sidebar.html')
};
