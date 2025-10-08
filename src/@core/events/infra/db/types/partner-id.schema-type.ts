import { Type } from '@mikro-orm/core';
import { PartnerId } from '../../../domain/entities/partner.entity';

export class PartnerIdSchemaType extends Type<PartnerId, string> {
  convertToDatabaseValue(value: PartnerId | undefined | null): string {
    return value instanceof PartnerId
      ? value.value
      : (value as unknown as string);
  }

  convertToJSValue(value: string): PartnerId {
    return new PartnerId(value);
  }

  getColumnType(): string {
    return 'varchar(36)';
  }
}
