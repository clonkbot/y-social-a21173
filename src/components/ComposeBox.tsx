import { FC, useState } from 'react';

interface ComposeBoxProps {
  onPost: (content: string) => void;
}

export const ComposeBox: FC<ComposeBoxProps> = ({ onPost }) => {
  const [content, setContent] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const maxLength = 280;

  const handleSubmit = () => {
    if (content.trim() && content.length <= maxLength) {
      onPost(content);
      setContent('');
      setIsFocused(false);
    }
  };

  const charCount = content.length;
  const isOverLimit = charCount > maxLength;
  const charPercentage = Math.min((charCount / maxLength) * 100, 100);

  return (
    <div className={`border-b-2 border-y-border p-4 transition-all duration-300 ${isFocused ? 'bg-y-card' : ''}`}>
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0 hidden sm:block">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-y-accent to-y-accent-dim rounded-full flex items-center justify-center font-display font-bold text-y-dark">
            U
          </div>
        </div>

        {/* Input area */}
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => !content && setIsFocused(false)}
            placeholder="what's happening?"
            className="input-brutal w-full bg-transparent text-y-light placeholder-y-muted text-base md:text-lg resize-none outline-none min-h-[60px] md:min-h-[80px] font-body p-2 border-none"
            rows={isFocused ? 3 : 2}
          />

          {/* Bottom bar */}
          <div className={`flex items-center justify-between mt-3 pt-3 border-t border-y-border transition-opacity ${isFocused || content ? 'opacity-100' : 'opacity-0'}`}>
            {/* Tools */}
            <div className="flex items-center gap-1">
              <button className="icon-btn p-2 text-y-accent hover:bg-y-accent/10 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="icon-btn p-2 text-y-accent hover:bg-y-accent/10 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <button className="icon-btn p-2 text-y-accent hover:bg-y-accent/10 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </button>
            </div>

            {/* Character count & Post button */}
            <div className="flex items-center gap-3 md:gap-4">
              {content.length > 0 && (
                <div className="flex items-center gap-2">
                  {/* Circle progress */}
                  <div className="relative w-6 h-6">
                    <svg className="w-6 h-6 -rotate-90">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-y-border"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray={`${charPercentage * 0.628} 62.8`}
                        className={isOverLimit ? 'text-red-500' : charCount > maxLength * 0.8 ? 'text-yellow-500' : 'text-y-accent'}
                      />
                    </svg>
                  </div>
                  {charCount > maxLength * 0.8 && (
                    <span className={`text-xs font-body ${isOverLimit ? 'text-red-500' : 'text-y-muted'}`}>
                      {maxLength - charCount}
                    </span>
                  )}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={!content.trim() || isOverLimit}
                className={`btn-glitch px-4 md:px-6 py-2 font-display font-bold text-sm uppercase tracking-wider transition-all
                  ${content.trim() && !isOverLimit
                    ? 'bg-y-accent text-y-dark hover:bg-y-accent-dim'
                    : 'bg-y-accent/30 text-y-dark/50 cursor-not-allowed'
                  }
                `}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
