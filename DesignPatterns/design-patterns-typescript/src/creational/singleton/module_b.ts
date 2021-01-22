import { MyDatabaseFunction } from './db/my-database-function';
import { db1 as db1FromModuleA } from './module_a';
const db1 = MyDatabaseFunction;
db1.addUser({ name: 'Leonardo', age: 39 });
db1.addUser({ name: 'Chico', age: 28 });
db1.addUser({ name: 'Jose', age: 4 });
db1.show();

console.log(db1 === db1FromModuleA);
