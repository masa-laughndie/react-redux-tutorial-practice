import * as React from 'react';
import { Todo } from '../types';
import TodoList from '../components/TodoList';
import { fetchTodos } from '../apis';

interface Props {}

interface State {
  todos: Todo[];
}

export class TodosContainer extends React.Component<Props, State> {
  public state: State = {
    todos: []
  };

  public componentDidMount() {
    fetchTodos()
      .then(({ data }) => {
        this.setState({ todos: data });
      })
      .catch(error => {
        alert(error);
      });
  }

  public render() {
    const { todos } = this.state;

    return <TodoList todos={todos} />;
  }
}
