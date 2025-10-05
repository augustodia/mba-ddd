import { AggregateRoot } from '../../../common/domain/aggregate-root';
import Cpf from '../../../common/domain/cpf.vo';
import Uuid from '../../../common/domain/uuid.vo';

export class CustomerId extends Uuid {}

export type CustomerConstructorProps = {
  id: CustomerId | string;
  name: string;
  cpf: Cpf;
};

export class Customer extends AggregateRoot {
  id: CustomerId;
  name: string;
  cpf: Cpf;

  constructor(props: CustomerConstructorProps) {
    super();
    this.id =
      typeof props.id === 'string' ? new CustomerId(props.id) : props.id;
    this.cpf = props.cpf;
    this.name = props.name;
  }

  static create(command: { name: string; cpf: string }) {
    return new Customer({
      id: new CustomerId(),
      name: command.name,
      cpf: new Cpf(command.cpf),
    });
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      cpf: this.cpf,
    };
  }
}
