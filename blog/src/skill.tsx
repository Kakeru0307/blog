import React from 'react';
import CategoryPageLayout from './CategoryPageLayout';
import { useState } from 'react';
import { useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  createdAt: string;
}

const Skill: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/posts?category=skill');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error: unknown) {
        if (error instanceof Error)
          console.error("Network error:", error.message);
          alert(`ネットワークエラーが発生しました: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <CategoryPageLayout title="skill"><p>記事を読み込み中...</p></CategoryPageLayout>;
  if (error) return <CategoryPageLayout title="skill"><p>記事の読み込み中にエラーが発生しました: {error}</p></CategoryPageLayout>;

  return (
    <CategoryPageLayout title="SKILL">
      {/* ここにSKILLカテゴリ固有のコンテンツを記述 */}
      <p>ここでは私が過去に行った制作や資格習得についての記事をまとめていきます。</p>
      <div style={{ marginTop: '30px' }}>
        <h3>最新のスキル記事</h3>
        {posts.length === 0 ? (
          <p>まだ記事がありません。</p>
        ) : (
          posts.map(post => (
            <div key={post.id} className='article-item'>
              <h4 className='article-title'>{post.title}</h4>
              <p className='article-date'>投稿日時: {new Date(post.createdAt).toLocaleDateString()}</p>
              <p className='article-excerpt'>{post.content.substring(0, 5)}...</p> {/* 一部だけ表示 */}
              {/* <Link to={`/posts/${post.id}`}>続きを読む</Link> */} {/* 詳細ページへのリンク */}
            </div>
          ))
        )}
      </div>
    </CategoryPageLayout>
  );
};

export default Skill;