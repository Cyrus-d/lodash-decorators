"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_es_1 = require("lodash-es");
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
/**
 * Negates a functions result or, when used on a property, creates a function that
 * negates the result of a provided function.
 * @param {ResolvableFunction} [fn] A resolvable function.
 * @example
 * class MyClass {
 *   @Negate('fn')
 *   fn2: () => boolean;
 *
 *   fn(): boolean {
 *     return true;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn2(); //=> false
 */
exports.Negate = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(lodash_es_1.negate, new applicators_1.PartialValueApplicator(), { property: true, optionalParams: true }));
exports.negate = exports.Negate;
exports.default = exports.Negate;
//# sourceMappingURL=negate.js.map