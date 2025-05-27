import React from 'react';
import CategoryPageLayout from './CategoryPageLayout';

const Skill: React.FC = () => {
  return (
    <CategoryPageLayout title="SKILL">
      {/* ここにSKILLカテゴリ固有のコンテンツを記述 */}
      <p>ここでは私が過去に行った制作や資格習得についての記事をまとめていきます。</p>
    </CategoryPageLayout>
  );
};

export default Skill;