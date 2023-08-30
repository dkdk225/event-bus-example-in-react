class EventBus {
  constructor() {
    this.subscribers = {};
  }

  subscribe(eventType, callback) {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = [];
    }
    this.subscribers[eventType].push(callback);
  }

  publish(eventType, data) {
    if (this.subscribers[eventType]) {
      this.subscribers[eventType].forEach((callback) => {
        callback(data);
      });
    }
  }
}

export default EventBus;
