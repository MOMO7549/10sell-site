import React, { useState } from 'react';

const TokenSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const tokenAddress = ''; // Empty for now, will be added later

  const copyTokenAddress = async () => {
    if (!tokenAddress || tokenAddress.trim() === '') {
      return;
    }

    try {
      await navigator.clipboard.writeText(tokenAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // Fallback for older browsers
      const input = document.getElementById('tokenAddress') as HTMLInputElement;
      if (input) {
        input.select();
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  return (
    <section className="token-section">
      <div className="token-title">💰 Token Information</div>
      
      <h3 style={{ fontSize: '20px', color: '#5f6368', marginBottom: '20px', marginTop: '25px', fontWeight: 500 }}>
        Contract Address
      </h3>
      
      <div className="token-address-container">
        <input
          type="text"
          id="tokenAddress"
          className="token-address-input"
          value={tokenAddress}
          readOnly
          style={{ textAlign: 'center' }}
          placeholder="Contract address will be added soon"
        />
        <button 
          className={`copy-button ${copied ? 'copied' : ''}`}
          onClick={copyTokenAddress}
          title="Copy address"
        >
          {copied ? '✅ Copied!' : '📋 Copy'}
        </button>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '35px' }}>
        <a
          href="https://dex.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="google-button"
          style={{ background: '#34a853', textDecoration: 'none', fontSize: '16px', padding: '15px 30px' }}
        >
          💰 Buy on DEX
        </a>
        <a
          href="https://dexscreener.com"
          target="_blank"
          rel="noopener noreferrer"
          className="google-button"
          style={{ background: '#4285f4', textDecoration: 'none', fontSize: '16px', padding: '15px 30px' }}
        >
          📊 View Chart
        </a>
      </div>
    </section>
  );
};

export default TokenSection;
