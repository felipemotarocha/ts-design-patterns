import { MyDatabaseClassic } from "./db/my-database-classic";

import "./module_a";

const db = MyDatabaseClassic.getInstance();

db.add({ name: "John Doe", age: 20 });

db.show();
