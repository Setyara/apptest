/**
 * Page
 */

'use strict';

/**
 * Controller
 */
class PageController {
    constructor($log) {
        'ngInject';

        this.$log = $log;
    }
};

/**
 * Component
 */
export const page = {
    controller: PageController,
    controllerAs: 'spc',
    template: require('./page.html')
};
