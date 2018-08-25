import * as React from 'react';

interface Props {
  onClick: any;
}

const ControlPanel = ({ onClick }: Props) => (
  <button onClick={onClick}>Focus</button>
);

export default ControlPanel;
