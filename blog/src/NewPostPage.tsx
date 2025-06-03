import React, { useState } from 'react';
import CategoryPageLayout from './CategoryPageLayout'; // レイアウトコンポーネントをインポート

const NewPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('general'); // 例: カテゴリ選択

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      title,
      content,
      category,
      createdAt: new Date().toISOString(), 
    };

    try {
      const response = await fetch('http://localhost:3001/posts', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 必要であれば認証トークンなど
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        alert('記事が正常に投稿されました！');
        setTitle('');
        setContent('');
        setCategory('general');
      } else {
        alert('記事の投稿に失敗しました。');
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('ネットワークエラーが発生しました。');
    }
  };

  return (
    <CategoryPageLayout title="新しい記事の作成">
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#3a3a3a', borderRadius: '8px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <label htmlFor="title" style={{ display: 'block', marginBottom: '5px', color: '#ffcc00' }}>タイトル:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #555', borderRadius: '4px', backgroundColor: '#444', color: '#eee' }}
            />
          </div>
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <label htmlFor="content" style={{ display: 'block', marginBottom: '5px', color: '#ffcc00' }}>本文:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={10}
              style={{ width: '100%', padding: '10px', border: '1px solid #555', borderRadius: '4px', backgroundColor: '#444', color: '#eee' }}
            ></textarea>
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label htmlFor="category" style={{ display: 'block', marginBottom: '5px', color: '#ffcc00' }}>カテゴリ:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
                console.log('Selected category:', e.target.value)
              }}
              style={{ width: '100%', padding: '10px', border: '1px solid #555', borderRadius: '4px', backgroundColor: '#444', color: '#eee' }}
            >
              <option value="general">一般</option>
              <option value="skill">スキル</option>
              <option value="life">ライフ</option>
              <option value="game">ゲーム</option>
              {/* 必要に応じてカテゴリを追加 */}
            </select>
          </div>
          <button
            type="submit"
            style={{
              padding: '12px 25px',
              backgroundColor: '#ffcc00',
              color: '#333',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1.1em',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease',
            }}
          >
            記事を投稿
          </button>
        </form>
      </div>
    </CategoryPageLayout>
  );
};

export default NewPost;