import * as React from 'react';
import { Todo } from '../types/CommonTypes';
import { ControlPanel } from '../components/ControlPanel';
import { TodoList } from '../components/TodoList';
import { addTodo, fetchTodos } from '../apis';

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
      const todos = await fetchTodos();
      this.setState({ todos, loading: false });
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

  private handleAddTodo = async (title: string) => {
    const { todos } = this.state;

    const newTodo = await addTodo(title);

    this.setState({
      todos: todos.concat(newTodo)
    });
  };

  private handleClickFocusButton = () => {
    if (this.todoList) {
      this.todoList.focus();
    }
  };
}
