import * as React from 'react';
import { Todo } from '../types/CommonTypes';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  onAddTodo: Function;
}

interface State {
  title: string;
}

export class TodoList extends React.Component<Props, State> {
  // 上記で State の型を指定しているが、以下で再度記述しないと、 title の」型推論による string 型指定となってしまう
  // 今回の場合、もともと title: string なので問題ないが、 title: 'abc' で以下の State を消すと、 上記の <,State> との型の差異が生まれてエラーとなる
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
        {/* map は引数に各要素が自動で渡されるため、以下のように書ける */}
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
