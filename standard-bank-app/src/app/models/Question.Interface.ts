export enum Types{
  single,
  multiple,
  action
}

export interface QuestionInterface {
  title: string;
  id: number;
  type?: Types;
  actionName?: string;
}
