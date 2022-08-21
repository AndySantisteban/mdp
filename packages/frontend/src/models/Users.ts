export interface IUsers {
  id: string;
  name: string;
  surname: string;
  date: string;
}

export interface IListUsers {
  users: IUsers[];
}
