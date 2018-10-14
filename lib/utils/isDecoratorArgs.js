"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_es_1 = require("lodash-es");
function isMethodOrPropertyDecoratorArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.length >= 2
        && lodash_es_1.isObject(args[0])
        && lodash_es_1.isString(args[1])
        && lodash_es_1.isFunction(args[0].constructor)
        && args[0].constructor.prototype === args[0];
}
exports.isMethodOrPropertyDecoratorArgs = isMethodOrPropertyDecoratorArgs;
//# sourceMappingURL=isDecoratorArgs.js.map