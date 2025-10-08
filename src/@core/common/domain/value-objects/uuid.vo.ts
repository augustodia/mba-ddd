import { validate as uuidValidate, v7 as UuidGen } from 'uuid';
import { ValueObject } from './value-object';

export class Uuid extends ValueObject<string> {
  constructor(id?: string) {
    super(id || UuidGen());
    this.validate();
  }

  private validate() {
    const isValid = uuidValidate(this.value);
    if (!isValid) {
      throw new InvalidUuidError(this.value);
    }
  }
}

export class InvalidUuidError extends Error {
  constructor(invalidValue: any) {
    super(`Value ${invalidValue} must be a valid UUID`);
    this.name = 'InvalidUuidError';
  }
}

export default Uuid;
