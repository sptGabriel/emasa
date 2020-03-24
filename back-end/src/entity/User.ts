import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity
} from "typeorm";

import { ObjectType, Field, ID, Root } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  login: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @CreateDateColumn()
  created: Date;

  @Field()
  @UpdateDateColumn()
  updated: Date;
}
