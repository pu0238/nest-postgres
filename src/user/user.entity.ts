import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'text' })
  email: string;

  @Column({ nullable: false, type: 'text' })
  firstName: string;

  @Column({ nullable: false, type: 'text' })
  lastName: string;
}
