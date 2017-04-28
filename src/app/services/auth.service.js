'use strict';

export class AuthService {
    constructor($http, $state, $window, AuthToken) {
        'ngInject';

        this.$http = $http;
        this.$state = $state;
        this.AuthToken = AuthToken;
        this.base64Encode = str => $window.btoa(str);
        this.isAuthenticated = AuthToken.getToken() ? true : false;
    }

    /**
     * @param  {String} login
     * @param  {String} password
     * @return {Promise}
     */
    authenticate(login, password) {
        var encoded = this.base64Encode(login + ":" + password);
        this.isAuthenticated = true;
        this.AuthToken.setToken(res.data.data);

        // return this.$http.get('https://qa-siteapp-engine.cools.com/api/v2/auth', {
        //     headers: {
        //         Authorization: 'Basic ' + encoded
        //     }
        // }).then((res) => {
        //     this.isAuthenticated = true;
        //     this.AuthToken.setToken(res.data.data);
        //
        //     return;
        // });
    }
}
