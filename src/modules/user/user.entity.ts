import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  //   @CreateDateColumn()
  //   created_at: Date;

  //   @UpdateDateColumn()
  //   update_at: Date;

  @Column()
  created_at: Date;

  @Column()
  update_at: Date;
}
