export function isPrototypeAccess(context: object, target: object): boolean {
  return context === target
    // @ts-ignore
    || (context.constructor !== target.constructor && Object.getPrototypeOf(this).constructor === target.constructor);
}
