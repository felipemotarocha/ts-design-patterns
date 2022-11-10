import { MyDatabaseClassic } from "./db/my-database-classic";

const db = MyDatabaseClassic.getInstance();

db.add({ name: "Jane Doe", age: 20 });
