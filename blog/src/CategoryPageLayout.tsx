import React from 'react';
import './CategoryPageLayout.css'; 

interface CategoryPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const CategoryPageLayout: React.FC<CategoryPageLayoutProps> = ({ title, children }) => {
  return (
    <div className="category-page-wrapper">
      <main className="category-main-content">
        <h2 className="category-page-title">{title}</h2>
        <div className="category-content-area">
          {children} {/* 各カテゴリの固有コンテンツがここに入る */}
        </div>
      </main>

      {/* 必要であればフッターを追加 */}
      <footer className="category-footer">
        <p>&copy; {new Date().getFullYear()} Notes Of Days. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CategoryPageLayout;