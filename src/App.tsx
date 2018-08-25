import * as React from 'react';
import { TodosContainer } from './containers/TodosContainer';

const divStyle = {
  color: 'green',
  margin: '20px'
};

const App = () => (
  <div id="apps" style={divStyle}>
    <TodosContainer />
  </div>
);

export default App;
