import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1645622469235 implements MigrationInterface {
    name = 'UserMigration1645622469235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" text NOT NULL, "firstName" text NOT NULL, "lastName" text NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
