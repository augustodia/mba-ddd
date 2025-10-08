import { Customer, CustomerId } from '../customer.entity';

test('deve criar um cliente', () => {
  const customer = Customer.create({
    name: 'João',
    cpf: '99346413050',
  });

  expect(customer).toBeInstanceOf(Customer);
  expect(customer.id).toBeDefined();
  expect(customer.id).toBeInstanceOf(CustomerId);
  expect(customer.name).toBe('João');
  expect(customer.cpf.value).toBe('99346413050');

  // não é valido
  // customer = new Customer({
  //   id: '123', new CustomerId() || new CustomerId('')
  //   name: 'João',
  //   cpf: '99346413050',
  // });
});
