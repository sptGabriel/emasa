import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column("timestamp")
  register_at: Date;

  @Column("timestamp")
  updated_at: Date;
}
