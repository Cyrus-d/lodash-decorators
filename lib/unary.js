"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_es_1 = require("lodash-es");
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
exports.Unary = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(lodash_es_1.unary, new applicators_1.PreValueApplicator(), { optionalParams: true }));
exports.unary = exports.Unary;
exports.default = exports.Unary;
//# sourceMappingURL=unary.js.map