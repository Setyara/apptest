/**
 * Page Service
 */

'use strict';

/**
 * PageService
 */
export class PageService {
    constructor($log) {
        'ngInject';

        this.$log = $log;

        this.pages = [
            {title: 'Home', slug: 'home', active: false},
            {title: 'Page', slug: 'page', active: false},
            {title: 'Setting', slug: 'setting', active: false},
            {title: 'Secret', slug: 'secret', active: false}
        ];

    }

    getPages() {
        return this.pages;
    }

    getActivePage() {
        return this.activePage;
    }

    setActivePage(p) {
        let page = null;
        if (typeof p === 'string') {
            page = this.pages.filter(item => item.slug === p)[0];
        } else if (typeof p === 'object') {
            page = p;
            angular.forEach(this.pages, (k) => {k.active = false;})
        } else {
            this.$log.info('[WRONG TYPE]');
            return;
        }
        page.active = true;
        this.activePage = page;
    }

    removeActivePage() {
        angular.forEach(this.pages, (k) => {k.active = false;})
        this.activePage = null;
    }
}
