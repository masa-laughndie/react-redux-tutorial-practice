import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../actions';
import { Todo } from '../types/CommonTypes';
import { ControlPanel } from '../components/ControlPanel';
import { TodoList } from '../components/TodoList';
import { RootState } from '../reducers/rootReducer';
import { Action } from '../types/ActionTypes';

interface Props {
  todos: Todo[];
  loading: boolean;
  addTodo: Function;
  fetchTodos: Function;
}

interface State {}

class Todos extends React.Component<Props, State> {
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

const mapStateToProps = (state: RootState) => {
  const { todos, loading } = state.todos;
  return {
    todos,
    loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    addTodo: bindActionCreators(actions.addTodo, dispatch),
    fetchTodos: bindActionCreators(actions.fetchTodos, dispatch)
  };
};

export const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
