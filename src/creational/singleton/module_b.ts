import { MyDatabaseFunction } from "./db/my-database-function";

import "./module_a";

const db = MyDatabaseFunction;

db.add({ name: "John Doe", age: 20 });

db.show();
