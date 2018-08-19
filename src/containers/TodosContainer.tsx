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

  public async componentDidMount() {
    try {
      const { data } = await fetchTodos();
      this.setState({ todos: data });
    } catch (error) {
      alert(error);
    }
  }

  public render() {
    const { todos } = this.state;

    return <TodoList todos={todos} onAddTodo={this.handleAddTodo} />;
  }

  private handleAddTodo = (title: string) => {
    const { todos } = this.state;

    const newTodo: Todo = this.createTodo(title);

    this.setState({
      todos: todos.concat(newTodo)
    });
  };

  private createTodo(title: string) {
    return {
      id: Math.floor(Math.random() * 1000000),
      title,
      completed: false,
      userId: Math.floor(Math.random() * 1000000)
    };
  }
}
