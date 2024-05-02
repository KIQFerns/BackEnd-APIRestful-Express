import { createConnection } from "typeorm";

createConnection();

// update orm version
// import { DataSource } from "typeorm";
// import Product from "@modules/products/typeorm/entities/Product";
// import User from "@modules/users/typeorm/entities/User";
// import { CreateProducts1607437608841 } from "./migrations/1714518208453-CreateProducts";
// import { CreateUsers1607534203339 } from "./migrations/1714576713510-CreateUsers";

// export const dataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "docker",
//   database: "apivendas",
//   entities: [Product, User],
//   migrations: [CreateProducts1607437608841, CreateUsers1607534203339],
// });
