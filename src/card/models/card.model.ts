export interface CardModel {
  board_id: string;
  title: string;
  content?: string;
  list_id: string;
  created_by: string;
  created_at?: string;
  start_date?: Date;
  due_date?: Date;
  index?: number;
  color: string;
  priority?: string;
  assignees?: Array<string>;
  _id?: string;
  __v?: number;
}
