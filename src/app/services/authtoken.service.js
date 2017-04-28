'use strict';


/**
 * @todo Improve this using encapsulation, getters and setters
 * i.e. let bearer = Symbol() . . .
 */
export class AuthToken {
    constructor($window) {
        'ngInject';
        this.$window = $window;
        this.bearerToken = $window.sessionStorage.bearer;
    }

    /**
     * Getter for token
     * @returns {String} token
     */
    getToken() {
        return this.bearerToken;
    }

    /**
     * Setter for token
     * @param {String} token
     */
    setToken(token) {
        this.bearerToken = token;
        this.$window.sessionStorage.bearer = this.bearerToken;
    }

    deleteToken() {
        this.$window.sessionStorage.removeItem('bearer');
    }

    /**
     * Helper method to generate authorization header
     * @returns {String} header
     */
    getAuthorizationHeader() {
        if (this.bearerToken) {
            return 'Bearer ' + this.bearerToken;
        }
    }
}
