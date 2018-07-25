export enum Types{
  single,
  multiple,
  action
}

export interface Question {
  title: string;
  id: number;
  type?: Types;
  actionName?: string;
}
