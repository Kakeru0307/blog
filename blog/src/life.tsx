import React from 'react';
import CategoryPageLayout from './CategoryPageLayout';

const Life: React.FC = () => {
  return (
    <CategoryPageLayout title="LIFE">
      {/* ここにLIFEカテゴリ固有のコンテンツを記述 */}
      <p>日々の出来事、旅行の思い出、趣味（読書、料理、写真など）、そして個人的な考えや哲学を共有するページです。</p>
      <h3>最近の出来事</h3>
      <p>先日、ずっと行きたかった北海道旅行に行ってきました。大自然と美味しい食べ物に感動！</p>
      <h3>私の趣味</h3>
      <ul>
        <li>読書（特にSFと歴史小説）</li>
        <li>カフェ巡り</li>
        <li>プログラミング以外の趣味</li>
      </ul>
    </CategoryPageLayout>
  );
};

export default Life;