import { User } from "../intefaces/user";

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;

  private readonly users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  public add(user: User): void {
    this.users.push(user);
  }

  public remove(index: number): void {
    this.users.splice(index, 1);
  }

  public show(): void {
    for (const u of this.users) console.log(u);
  }
}
