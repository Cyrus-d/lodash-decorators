import { identity } from 'lodash-es';
import { Applicator, ApplicateOptions } from './Applicator';
import { resolveFunction } from '../utils';

export class ComposeApplicator extends Applicator {
  constructor(private _config: { post?: boolean } = {}) {
    super();
  }

  get post(): boolean {
    return this._config.post === true;
  }
  apply({ config: { execute }, value = identity, args, target }: ApplicateOptions): any {
    // tslint:disable-next-line:no-this-assignment
    const applicator = this;

    return function(...invokeArgs: any[]): any {
      const _args = [
        // @ts-ignore
        ...args.map((method) => resolveFunction(method, this, target))
      ];

      if (applicator.post) {
        _args.push(value);
      } else {
        _args.unshift(value);
      }
      // @ts-ignore
      return execute(..._args).apply(this, invokeArgs);
    };
  }
}
