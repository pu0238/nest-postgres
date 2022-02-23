import { getEnv } from './src/middleware/getEnv';
import { User } from './src/user/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const nodeEnvironment = getEnv('NODE_ENV').toUpperCase();
const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: getEnv(`${nodeEnvironment}_DATABASE_HOST`),
  port: parseInt(getEnv(`${nodeEnvironment}_DATABASE_PORT`)) ?? 3306,
  username: getEnv(`${nodeEnvironment}_DATABASE_USER`),
  password: getEnv(`${nodeEnvironment}_DATABASE_PASSWORD`),
  database: getEnv(`${nodeEnvironment}_DATABASE_NAME`),
  entities: [User],
  migrationsTableName: 'custom_migration_table',
  migrations: ['dist/migration/*{.ts,.js}'],
  cli: {
    migrationsDir: 'migration',
  },
};
export = config;
