import { IUser } from '../interfaces/user';

export const MyDatabaseFunction = (function () {
  const users: IUser[] = [];
  return {
    addUser(user: IUser): void {
      users.push(user);
    },

    remove(index: number): void {
      users.splice(index, 1);
    },

    show(): void {
      for (const user of users) {
        console.log(user);
      }
    },
  };
})();
