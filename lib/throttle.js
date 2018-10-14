"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_es_1 = require("lodash-es");
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
exports.Throttle = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(lodash_es_1.throttle, new applicators_1.PreValueApplicator(), { setter: true, getter: true, optionalParams: true }));
exports.throttle = exports.Throttle;
exports.ThrottleGetter = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(lodash_es_1.throttle, new applicators_1.PreValueApplicator(), { getter: true, optionalParams: true }));
exports.throttleGetter = exports.ThrottleGetter;
exports.ThrottleSetter = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(lodash_es_1.throttle, new applicators_1.PreValueApplicator(), { setter: true, optionalParams: true }));
exports.throttleSetter = exports.ThrottleSetter;
exports.default = exports.Throttle;
//# sourceMappingURL=throttle.js.map