export type TodoType = {
  title: string;
  status: TodoStatus;
};

export enum TodoStatus {
  Active = "ACTIVE",
  Completed = "COMPLETED",
}
