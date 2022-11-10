import { MyDatabaseModule } from "./db/my-database-module";

import "./module_a";

const db = MyDatabaseModule;

db.add({ name: "John Doe", age: 20 });

db.show();
