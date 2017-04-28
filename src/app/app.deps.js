/**
 * Bind angular to global scope
 * @todo  Try to find a better practice to avoid using window object
 */
import angular from 'angular'
import siema from 'siema';

import 'angular-ui-router';
import 'angular-loading-bar';
import 'angularjs-slider';
import 'hlg-angular-lazy-img';
import 'angular-timeago';
import 'angular-bootstrap-npm';

/* Window bindings */
window.angular = angular;
window.Siema   = siema;

export const moduleName  = 'app';
export const angularDeps = [
    'ui.router',
    'angular-loading-bar',
    'yaru22.angular-timeago',
    'rzModule',
    'angularLazyImg',
    'ui.bootstrap'
];
