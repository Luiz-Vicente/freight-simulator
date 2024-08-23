import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreatesDeliverySettingsTable1724009722421
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'delivery_settings',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'freightOperatorId',
            type: 'uuid',
          },
          {
            name: 'initialDistance',
            type: 'int',
          },
          {
            name: 'finalDistance',
            type: 'int',
          },
          {
            name: 'multipleofDistance',
            type: 'int',
          },
          {
            name: 'daysToDeliver',
            type: 'int',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'delivery_settings',
      new TableForeignKey({
        columnNames: ['freightOperatorId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'freight_operators',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('delivery_settings');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('freightOperatorId') !== -1,
    );
    await queryRunner.dropForeignKey('delivery_settings', foreignKey);
    await queryRunner.dropTable('delivery_settings');
  }
}
