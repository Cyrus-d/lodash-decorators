"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_es_1 = require("lodash-es");
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
var decorator = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(lodash_es_1.throttle, new applicators_1.PreValueApplicator(), { setter: true }));
function ThrottleAll(wait, options) {
    return decorator(wait, options);
}
exports.ThrottleAll = ThrottleAll;
exports.throttleAll = ThrottleAll;
exports.default = decorator;
//# sourceMappingURL=throttleAll.js.map