import { DataSource } from "typeorm";
import { Ad } from "../entities/Ad";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./wild.sqlite",
  entities: [Ad],
  synchronize: false,
  migrations: ["migrations/*.ts"],
  migrationsTableName: "migrations",
});
