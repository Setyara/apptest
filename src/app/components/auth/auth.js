'use strict';

class AuthFormController {
    constructor($log, $state, AuthService) {
        'ngInject';

        this.$log = $log;
        this.$state = $state;

        this.AuthService = AuthService;
        this.user = {};
    }

    /**
     * Logs user in
     * @return {Promise}
     */
    login() {
        this.AuthService.authenticate(this.user.username, this.user.password)
            .then(() => {
                this.$log.info('Successfully logged-in . . .');
                this.$state.go('home');
            })
            .catch(() => this.alert = {type: 'danger', show: true, message: 'Wrong credentials'});
    }

    /**
     * User Registration
     * @return {Promise}
     */
    registration() {
        this.$state.go('registration');
    }
}

export const auth = {
    controller: AuthFormController,
    controllerAs: 'auth',
    template: require('./auth.html')
};
