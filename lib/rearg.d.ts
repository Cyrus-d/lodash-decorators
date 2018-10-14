import { LodashDecorator, ResolvableFunction } from './factory';
declare const decorator: import("../../../Projects/lodash-decorators/src/factory/DecoratorFactory").GenericDecorator;
export declare function Rearg(indexes: ResolvableFunction | number | number[], ...args: Array<number | number[]>): LodashDecorator;
export { Rearg as rearg };
export default decorator;
