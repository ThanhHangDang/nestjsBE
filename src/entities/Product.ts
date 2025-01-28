import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  //   @Column()
  //   image: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
