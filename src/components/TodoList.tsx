import * as React from 'react';
import { Todo } from '../types';
import { TodoItem } from './TodoItem';

interface Props {
  todos: Todo[];
  onAddTodo: Function;
}

interface State {
  title: string;
}

export class TodoList extends React.Component<Props, State> {
  public state: State = {
    title: ''
  };

  private input: HTMLInputElement | null = null;

  public componentDidMount() {
    this.focus();
  }

  public focus() {
    if (this.input) {
      this.input.focus();
    }
  }

  public render() {
    const { todos } = this.props;
    const { title } = this.state;

    return (
      <React.Fragment>
        <div>{todos.map(this.renderTodo)}</div>
        <div>
          <input
            type="text"
            value={title}
            onChange={this.handleChangeTitle}
            ref={input => (this.input = input)}
          />
          <button onClick={this.handleAddTodo}>Add</button>
        </div>
      </React.Fragment>
    );
  }

  private renderTodo(todo: Todo) {
    return <TodoItem key={todo.id} {...todo} />;
  }

  private handleChangeTitle = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    this.changeTitle(event.currentTarget.value);
  };

  private handleAddTodo = (event: React.SyntheticEvent<HTMLElement>) => {
    const { onAddTodo } = this.props;
    const { title } = this.state;

    onAddTodo(title);
    this.reset();
  };

  private changeTitle(title: string) {
    this.setState({ title });
  }

  private reset() {
    this.setState({ title: '' });
  }
}
