import { moduleName } from '../app.deps'

/**
 * String
 * @param  {String} entityName
 * @param  {String} key
 * @param  {Any} value
 */
export const injectAngularEntities = (entityName, entities) => {
    const module = angular.module(moduleName);
    for (let key in entities) {
        if (entities.hasOwnProperty(key)) {
            const value = entities[key];
            module[entityName](key, value)
        }
    }
};

export const batchInject = batch => {
    for (let entityName in batch) {
        if (batch.hasOwnProperty(entityName)) {
            injectAngularEntities(entityName, batch[entityName])
        }
    }
};
