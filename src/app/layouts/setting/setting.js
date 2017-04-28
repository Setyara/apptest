/**
 * Page
 */

'use strict';

/**
 * Controller
 */
class SettingController {
    constructor($log) {
        'ngInject';

        this.$log = $log;
    }
};

/**
 * Component
 */
export const setting = {
    controller: SettingController,
    controllerAs: 'sc',
    template: require('./setting.html')
};
