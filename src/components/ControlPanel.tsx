import * as React from 'react';

interface Props {
  onClick: any;
}

/**
 * const ControlPanel = (props: Props) => {
 *   const { onClick } = props;
 *   return (
 *     <button onClick={onClick}>Focus</button>
 *   )
 * };
 *
 * 上記は以下のように短く書ける
 */

const ControlPanel = ({ onClick }: Props) => (
  <button onClick={onClick}>Focus</button>
);

// 直接 export const ControlPanel = () => {}
// にすると デベロッパーツール上でコンポーネント名が Unknown になる
// 以下は名前付きエクスポート( export { ControlPanel }; )でも名前が表示される
export default ControlPanel;
