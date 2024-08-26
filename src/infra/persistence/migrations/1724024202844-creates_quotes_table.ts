import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreatesFreightQuotesTable1724024202844
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'freight_quotes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'fastestOperatorId',
            type: 'uuid',
          },
          {
            name: 'fastestDaysForDelivery',
            type: 'int',
          },
          {
            name: 'fastestTotalCost',
            type: 'decimal',
          },
          {
            name: 'cheapestOperatorId',
            type: 'uuid',
          },
          {
            name: 'cheapestDaysForDelivery',
            type: 'int',
          },
          {
            name: 'cheapestTotalCost',
            type: 'decimal',
          },
          {
            name: 'shopkeeperId',
            type: 'uuid',
          },
          {
            name: 'deliveryAddressId',
            type: 'uuid',
          },
          {
            name: 'collectionAddressId',
            type: 'uuid',
          },
          {
            name: 'distanceKM',
            type: 'decimal',
          },
          {
            name: 'heightCM',
            type: 'decimal',
          },
          {
            name: 'widthCM',
            type: 'decimal',
          },
          {
            name: 'lengthCM',
            type: 'decimal',
          },
          {
            name: 'cubicWeight',
            type: 'decimal',
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
      'freight_quotes',
      new TableForeignKey({
        columnNames: ['fastestOperatorId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'freight_operators',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'freight_quotes',
      new TableForeignKey({
        columnNames: ['cheapestOperatorId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'freight_operators',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'freight_quotes',
      new TableForeignKey({
        columnNames: ['shopkeeperId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'shopkeepers',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'freight_quotes',
      new TableForeignKey({
        columnNames: ['deliveryAddressId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'delivery_addresses_for_quote',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'freight_quotes',
      new TableForeignKey({
        columnNames: ['collectionAddressId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'collection_addresses_for_quote',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('freight_quotes');
    for (const foreignKey of table.foreignKeys) {
      await queryRunner.dropForeignKey('freight_quotes', foreignKey);
    }
    await queryRunner.dropTable('freight_quotes');
  }
}
