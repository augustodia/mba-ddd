import { MikroORM, MySqlDriver } from '@mikro-orm/mysql';
import { PartnerSchema } from '../schema';
import { PartnerMySQLRepository } from './partner-mysql.repository';
import { Partner } from '../../../domain/entities/partner.entity';

test('partner rrepository', async () => {
  const orm = await MikroORM.init<MySqlDriver>({
    entities: [PartnerSchema],
    dbName: 'events',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    forceEntityConstructor: true,
  });

  await orm.schema.refreshDatabase();
  const em = orm.em.fork();
  const partnerRepo = new PartnerMySQLRepository(em);
  const partner = Partner.create({ name: 'Partner 1' });

  await partnerRepo.add(partner);
  await em.flush();
  em.clear();

  const partnerFound = await partnerRepo.findById(partner.id);

  expect(partnerFound?.id.equals(partner.id)).toBeTruthy();
});
