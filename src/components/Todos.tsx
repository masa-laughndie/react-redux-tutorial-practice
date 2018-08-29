import * as React from 'react';
import { Props, State } from '../containers/TodosContainer';
import ControlPanel from './ControlPanel';
import { TodoList } from './TodoList';

export class Todos extends React.Component<Props, State> {
  // ref で用いるプロパティはそのコンポーネント名かタグ名(ex: input)にする
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
