interface IEventBus {
  on: (e: string, fn: Function) => {};
  emit: (e: string, val: any) => {};
  off: (e: string, va: Function) => {};
}
declare const EventBus: IEventBus;
export = EventBus;
