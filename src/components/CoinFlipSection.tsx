import React from 'react';

const CoinFlipSection: React.FC = () => {
  return (
    <section className="coin-section">
      <div className="coin-container">
        {/* Left Side Image */}
        <div className="side-image-container has-image">
          <img 
            src="https://i.imgur.com/wizwzbW.png" 
            alt="Left image" 
            className="side-uploaded-image" 
            style={{ display: 'block' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Center Coin */}
        <div className="google-coin" id="coin">
          <div 
            className="coin-side coin-heads has-image"
            style={{
              backgroundImage: 'url(https://i.imgur.com/wFGZMik.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div 
            className="coin-side coin-tails has-image"
            style={{
              backgroundImage: 'url(https://i.imgur.com/GuLtdgF.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        {/* Right Side Image */}
        <div className="side-image-container has-image">
          <img 
            src="https://i.imgur.com/yk6Gwyc.png" 
            alt="Right image" 
            className="side-uploaded-image" 
            style={{ display: 'block' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
      
      <p className="coin-instructions">🎯 The coin determines the fate of 10 SELL</p>
    </section>
  );
};

export default CoinFlipSection;
