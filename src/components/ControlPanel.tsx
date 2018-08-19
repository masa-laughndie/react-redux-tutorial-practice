import * as React from 'react';

interface Props {
  onClick: any;
}

export const ControlPanel = ({ onClick }: Props) => (
  <button onClick={onClick}>Focus</button>;
);
