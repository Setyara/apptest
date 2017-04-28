'use strict';

export const InterceptionConfig = function ($q, $rootScope, $log, AuthToken) {
    'ngInject';

    return {
        request: function (config) {
            config.headers = config.headers || {};
            return config;
        },
        responseError: function (rejection) {
            //  Catch `invalid_request` and `invalid_grant` errors and ensure that the `token` is removed.
            if (400 === rejection.status && rejection.data) {
                AuthToken.deleteToken();
                $rootScope.$emit('oauth:error', rejection);
            }

            /**
             * Catch `invalid_token` and `unauthorized` errors.
             * The token isn't removed here so it can be refreshed when the `invalid_token` error occurs.
             */
            if (401 === rejection.status) {
                this.$log.info('Rejection');
                AuthToken.deleteToken();
                $rootScope.$emit('oauth:error', rejection);
            }

            return $q.reject(rejection);
        }
    };
}
