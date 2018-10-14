"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_es_1 = require("lodash-es");
/**
 * Assigns all properties from an object to another object including non enumerable
 * properties.
 * @export
 * @template T
 * @template U
 * @param {T} to
 * @param {U} from
 * @param {string[]} [excludes=[]]
 * @returns {T}
 */
function assignAll(to, from, excludes) {
    if (excludes === void 0) { excludes = []; }
    var properties = lodash_es_1.without.apply(void 0, [Object.getOwnPropertyNames(from)].concat(excludes));
    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var prop = properties_1[_i];
        lodash_es_1.attempt(assignProperty, to, from, prop);
    }
    return to;
}
exports.assignAll = assignAll;
/**
 * Assigns a property from one object to another while retaining descriptor properties.
 * @export
 * @template T
 * @template U
 * @param {T} to
 * @param {U} from
 * @param {string} prop
 */
function assignProperty(to, from, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(to, prop);
    if (!descriptor || descriptor.configurable) {
        var srcDescriptor = Object.getOwnPropertyDescriptor(from, prop);
        if (srcDescriptor && lodash_es_1.isObject(srcDescriptor)) {
            Object.defineProperty(to, prop, srcDescriptor);
        }
        else {
            to[prop] = from[prop];
        }
    }
}
exports.assignProperty = assignProperty;
//# sourceMappingURL=assignAll.js.map