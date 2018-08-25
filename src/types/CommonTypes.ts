export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface NormalizeTodos {
  todoIds: number[];
  todosById: Record<number, Todo>;
}
