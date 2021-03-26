function EventBus() {
  this.__eventcontainer = {};
  this.on = function (event, fn) {
    if (!fn || typeof fn !== "function")
      return new Error("miss event function");
    if (this.__eventcontainer.hasOwnProperty(event)) {
      this.__eventcontainer[event].push(fn);
    } else {
      this.__eventcontainer[event] = [fn];
    }
  };
  this.emit = function (event, payload) {
    if (this.__eventcontainer.hasOwnProperty(event)) {
      this.__eventcontainer[event].forEach((e) => {
        e(payload);
      });
    }
  };
  this.off = function (event, fn) {
    if (this.__eventcontainer.hasOwnProperty(event)) {
      const events = this.__eventcontainer[event];
      const index = events.findIndex((e) => e === fn);
      index > -1 && events.splice(index, 1);
      events.length === 0 && delete this.__eventcontainer[event];
    }
  };
}
module.exports = new EventBus();
