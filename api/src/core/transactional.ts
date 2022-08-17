import { EntityManager, DataSource } from 'typeorm';

export async function transactional<T>(
  dataSource: DataSource,
  manager: EntityManager | undefined,
  fn: (manager: EntityManager) => Promise<T>,
): Promise<T> {
  if (manager) return await fn(manager);

  const queryRunner = dataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();
  try {
    const result = await fn(queryRunner.manager);
    await queryRunner.commitTransaction();
    return result;
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw error;
  } finally {
    await queryRunner.release();
  }
}
