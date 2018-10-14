"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_es_1 = require("lodash-es");
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
exports.Spread = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(lodash_es_1.spread, new applicators_1.PreValueApplicator(), { optionalParams: true }));
exports.spread = exports.Spread;
exports.default = exports.Spread;
//# sourceMappingURL=spread.js.map