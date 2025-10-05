import Uuid from './uuid.vo';

export abstract class Entity {
  readonly id: Uuid;
  abstract toJSON(): any;
  equals(obj: this): boolean {
    if (obj === null || obj === undefined) {
      return false;
    }

    if (obj.id === undefined) {
      return false;
    }

    if (obj.constructor.name !== this.constructor.name) {
      return false;
    }

    return obj.id.equals(this.id);
  }
}
