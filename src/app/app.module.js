import './index.scss'

import { angularDeps, moduleName } from './app.deps'
import { appConfig } from './app.config'
import { appRun } from './app.run'

import { batchInject } from 'utils/inject'

import * as components from 'components'
import * as layouts    from 'layouts'
import * as directives from 'directives'
import * as services   from 'services'

const partials = {
    component: { ...components, ...layouts },
    directive: directives,
    service: services
};

angular.module(moduleName, angularDeps)
    .config(appConfig)
    .run(appRun);

batchInject(partials);
