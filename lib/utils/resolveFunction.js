"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_es_1 = require("lodash-es");
var log_1 = require("./log");
/*
   Resolves a function on the current target object. It first will
   try and resolve on the context object, then the target object,
   then an error will be thrown if the method can not be resolved.
   @private
   @param {Function|string} method The method or method name.
   @param {Object} [context] The context object to resolve from.
   @param {Object} [target] The target object to resolve from.
   @returns {Function} The resolved function.
*/
function resolveFunction(method, context, target, throwNotFound) {
    if (throwNotFound === void 0) { throwNotFound = true; }
    if (lodash_es_1.isFunction(method)) {
        return method;
    }
    else if (lodash_es_1.isString(method)) {
        // @ts-ignore
        if (context && lodash_es_1.isFunction(context[method])) {
            // @ts-ignore
            return context[method];
            // @ts-ignore
        }
        else if (target && lodash_es_1.isFunction(target[method])) {
            // @ts-ignore
            return target[method];
        }
    }
    if (throwNotFound) {
        throw new ReferenceError(log_1.log("Can not resolve method " + method + " on any target Objects"));
    }
}
exports.resolveFunction = resolveFunction;
//# sourceMappingURL=resolveFunction.js.map