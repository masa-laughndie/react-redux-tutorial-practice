import * as React from 'react';
import { Props, State } from '../containers/TodosContainer';
import { TodoList } from './TodoList';
import { ControlPanel } from './ControlPanel';

export class Todos extends React.Component<Props, State> {
  private todoList: TodoList | null = null;

  public componentDidMount() {
    const { fetchTodos } = this.props;

    fetchTodos();
  }

  public render() {
    const { todos, loading } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <TodoList
          todos={todos}
          onAddTodo={this.handleAddTodo}
          ref={todoList => (this.todoList = todoList)}
        />
        <ControlPanel onClick={this.handleClickFocusButton} />
      </React.Fragment>
    );
  }

  private handleAddTodo = (title: string) => {
    const { addTodo } = this.props;

    addTodo(title);
  };

  private handleClickFocusButton = () => {
    if (this.todoList) {
      this.todoList.focus();
    }
  };
}
