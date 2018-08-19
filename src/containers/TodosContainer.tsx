import * as React from 'react';
import { Todo } from '../types';
import TodoList from '../components/TodoList';

const fetchTodos = () => {
  const data: Todo[] = [
    { userId: 1, id: 1, title: 'foo', completed: false },
    { userId: 1, id: 2, title: 'bar', completed: false }
  ];
  return Promise.resolve({ data });
};

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
