import { isFunction } from 'lodash-es';

import { Applicator, ApplicateOptions } from './Applicator';
import { resolveFunction } from '../utils';

export class PartialValueApplicator extends Applicator {
  apply({ args, target, value, config: { execute } }: ApplicateOptions): any {
    return function(...invokeArgs: any[]): any {
      let fn = value;
      let argIndex = 0;

      if (!isFunction(fn)) {
        // @ts-ignore

        fn = resolveFunction(args[0], this, target);
        argIndex = 1;
      }
      // @ts-ignore
      return execute(fn, ...args.slice(argIndex)).apply(this, invokeArgs);
    };
  }
}
