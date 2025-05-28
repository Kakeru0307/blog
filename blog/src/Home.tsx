import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleSectionClick = (path:string) => {
    navigate(path);
  }
  return (
    <div className="home-container">
      {/* スキルページセクション */}
      <div className="section skill-page" onClick={() => handleSectionClick('/skill')}>
        <h2 className="section-title">SKILL</h2>
        <p className="section-description">
          プログラミング、デザイン、語学など、私が日々磨いているスキルについて紹介します。学習の進捗や新しい技術の習得過程を共有。
        </p>
      </div>

      {/* ライフページセクション */}
      <div className="section life-page" onClick={() => handleSectionClick('/life')}>
        <h2 className="section-title">LIFE</h2>
        <p className="section-description">
          日々の生活、旅行、趣味など、個人的な体験や感じたことを綴ります。共感や新しい発見があるかもしれません。
        </p>
      </div>

      {/* ゲームページセクション */}
      <div className="section game-page" onClick={() => handleSectionClick('/game')}>
        <h2 className="section-title">GAME</h2>
        <p className="section-description">
          お気に入りのゲームや最新のゲーム情報、プレイレビューなどを発信します。
        </p>
      </div>
    </div>
  );
};

export default Home;