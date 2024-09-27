import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";

@Entity()
export class Ad extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	title!: string;

	@Column()
	description?: string;

	@Column()
	owner!: string;

	@Column()
	price!: number;

	@Column()
	picture!: string;

	@Column()
	location!: string;

	@Column()
	createdAt!: string;

	@ManyToOne(
		() => Category,
		(category) => category.ads,
	)
	category!: Category;
}
