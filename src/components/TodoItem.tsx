import * as React from 'react';
import { Todo } from '../types/CommonTypes';

const TodoItem = ({ id, title }: Todo) => (
  <div>
    {id}: {title}
  </div>
);

export default TodoItem;
