import { MyDatabaseFunction } from './db/my-database-function';
const db1 = MyDatabaseFunction;

db1.addUser({ name: 'Joao', age: 39 });
db1.addUser({ name: 'Isabel', age: 28 });
db1.addUser({ name: 'Ju', age: 4 });

export { db1 };
