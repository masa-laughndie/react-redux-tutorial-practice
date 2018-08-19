import * as React from 'react';
import { Todo } from '../types';
import { TodoItem } from './TodoItem';

interface Props {
  todos: Todo[];
}

interface State {}

export default class TodoList extends React.Component<Props, State> {
  public render() {
    const { todos } = this.props;

    return (
      <React.Fragment>
        <div>{todos.map(this.renderTodo)}</div>
      </React.Fragment>
    );
  }

  private renderTodo(todo: Todo) {
    return <TodoItem key={todo.id} {...todo} />;
  }
}
