import { EntityManager } from '@mikro-orm/mysql';
import { Partner, PartnerId } from '../../../domain/entities/partner.entity';
import { IPartnerRepository } from '../../../domain/repositories/partner.repository.interface';

export class PartnerMySQLRepository implements IPartnerRepository {
  constructor(private entityManager: EntityManager) {}

  // eslint-disable-next-line @typescript-eslint/require-await
  async add(entity: Partner): Promise<void> {
    this.entityManager.persist(entity);
  }

  async findById(id: string | PartnerId): Promise<Partner | null> {
    return this.entityManager.findOne(Partner, {
      id: typeof id === 'string' ? new PartnerId(id) : id,
    });
  }

  async findAll(): Promise<Partner[]> {
    return this.entityManager.findAll(Partner);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async delete(entity: Partner): Promise<void> {
    this.entityManager.remove(entity);
  }
}
