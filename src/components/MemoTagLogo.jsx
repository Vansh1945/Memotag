'use client';

export default function MemoTagLogo() {
  return (
    <svg 
      viewBox="0 0 200 60" 
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MemoTag - AI Dementia Care"
    >
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        
        {/* Font Style */}
        <style>
          {`
            .logo-text {
              font-family: 'Inter', sans-serif;
              font-weight: 600;
              font-size: 24px;
              letter-spacing: 0.5px;
            }
            .logo-tagline {
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              font-size: 11px;
              letter-spacing: 0.3px;
            }
          `}
        </style>
      </defs>

      {/* Main Logo Text */}
      <text 
        x="170" 
        y="40" 
        className="logo-text"
        fill="url(#logoGradient)"
        textAnchor="end"
      >
        MemoTag
      </text>

      {/* Tagline */}
      <text
        x="170"
        y="52"
        className="logo-tagline"
        fill="#6B7280"
        textAnchor="end"
      >
        AI Dementia Care
      </text>
    </svg>
  );
}