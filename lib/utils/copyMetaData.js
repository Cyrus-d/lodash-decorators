"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_es_1 = require("lodash-es");
/**
 * Used to copy over meta data from function to function.
 * If meta data is attached to a function. This can get lost
 * when wrapping functions. This tries to persist that.
 * @private
 */
function copyMetadata(to, from) {
    lodash_es_1.forOwn(from, function (value, key) { return to[key] = value; });
    return to;
}
exports.copyMetadata = copyMetadata;
//# sourceMappingURL=copyMetaData.js.map