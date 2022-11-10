import { User } from "../intefaces/user";

export const MyDatabaseFunction = (function () {
  const users: User[] = [];

  return {
    add(user: User): void {
      users.push(user);
    },

    remove(index: number): void {
      users.splice(index, 1);
    },

    show(): void {
      for (const u of users) console.log(u);
    },
  };
})();
