import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreatesShopkeepersTable1724021673334
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'shopkeepers',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'phoneNumber',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'addressId',
            type: 'uuid',
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
      'shopkeepers',
      new TableForeignKey({
        columnNames: ['addressId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'addresses',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('shopkeepers');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('addressId') !== -1,
    );
    await queryRunner.dropForeignKey('shopkeepers', foreignKey);
    await queryRunner.dropTable('shopkeepers');
  }
}
