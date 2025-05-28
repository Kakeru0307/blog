import React from 'react';
import CategoryPageLayout from './CategoryPageLayout';

const Game: React.FC = () => {
  return (
    <CategoryPageLayout title="GAME">
      {/* ここにGAMEカテゴリ固有のコンテンツを記述 */}
      <p>最新のゲームレビュー、攻略情報、ゲーム業界のニュース、そして個人的なゲーム体験について語ります。</p>
      <h3>プレイ中のゲーム</h3>
      <ul>
        <li>ストリートファイター6 (もちろん！)</li>
        <li>ゼルダの伝説 ティアーズ オブ ザ キングダム</li>
        <li>ファイナルファンタジーVII リバース</li>
      </ul>
      <h3>注目しているゲーム</h3>
      <p>今年発売予定の〇〇には特に注目しています。情報が入り次第、随時更新します！</p>
    </CategoryPageLayout>
  );
};

export default Game;