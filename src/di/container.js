// container.js
class Container {
  constructor() {
    this.services = new Map();
    this.singletons = new Map();
  }

  register(serviceIdentifier, constructor, options = { singleton: false }) {
    this.services.set(serviceIdentifier, { constructor, options });
  }

  resolve(serviceIdentifier) {
    const target = this.services.get(serviceIdentifier);
    if (!target) {
      throw new Error(`Service ${serviceIdentifier} not found`);
    }

    // If the service is a singleton and already instantiated, return it.
    if (target.options.singleton && this.singletons.has(serviceIdentifier)) {
      return this.singletons.get(serviceIdentifier);
    }

    // Resolve dependencies
    const dependencies =
      Reflect.getMetadata("design:paramtypes", target.constructor) || [];
    const injections = dependencies.map((dep) => this.resolve(dep));

    // Instantiate the service
    const instance = new target.constructor(...injections);

    // If it's a singleton, store it for future use
    if (target.options.singleton) {
      this.singletons.set(serviceIdentifier, instance);
    }

    return instance;
  }
}

const container = new Container();
module.exports = container;
