import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'text', nullable: false })
  email: string;

  @Column({ nullable: false, type: 'text', length: 50 })
  firstName: string;

  @Column({ nullable: false, type: 'text', length: 50 })
  lastName: string;
}
