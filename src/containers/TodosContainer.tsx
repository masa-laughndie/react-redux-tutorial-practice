import * as React from 'react';
import { Todo } from '../types';
import { ControlPanel } from '../components/ControlPanel';
import { TodoList } from '../components/TodoList';
import { fetchTodos } from '../apis';

interface Props {}

interface State {
  todos: Todo[];
  loading: boolean;
}

export class TodosContainer extends React.Component<Props, State> {
  public state: State = {
    todos: [],
    loading: true
  };

  private todoList: TodoList | null = null;

  public async componentDidMount() {
    try {
      const { data } = await fetchTodos();
      this.setState({ todos: data, loading: false });
    } catch (error) {
      alert(error);
    }
  }

  public render() {
    const { todos, loading } = this.state;

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

  private handleClickFocusButton = () => {
    if (this.todoList) {
      this.todoList.focus();
    }
  };
}
