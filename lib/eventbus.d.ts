interface EventBus {
  __eventcontainer: { [key: string]: [value: Function] };
  on: (e: string, fn: Function) => {};
  emit: (e: string, val: any) => {};
  off: (e: string, va: Function) => {};
}
