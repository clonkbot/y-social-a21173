import { FC } from 'react';

const trends = [
  { category: 'Technology', tag: '#CyberPunk2077', posts: '45.2K' },
  { category: 'Design', tag: '#BrutalistWeb', posts: '23.1K' },
  { category: 'Gaming', tag: '#IndieDevs', posts: '18.9K' },
  { category: 'Crypto', tag: '#Decentralized', posts: '67.3K' },
  { category: 'Art', tag: '#GenerativeArt', posts: '12.4K' },
];

const suggestions = [
  { name: 'hex_master', handle: '@hex_master', avatar: 'H' },
  { name: 'pixel_witch', handle: '@pixel_witch', avatar: 'P' },
  { name: 'code_nomad', handle: '@code_nomad', avatar: 'C' },
];

export const TrendingPanel: FC = () => {
  return (
    <div className="sticky top-4 space-y-4">
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="search Y..."
          className="input-brutal w-full px-4 py-3 pl-10 bg-y-darker text-y-light placeholder-y-muted font-body text-sm rounded-none"
        />
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-y-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Trending */}
      <div className="bg-y-card border-2 border-y-border">
        <h2 className="font-display font-bold text-lg p-4 border-b-2 border-y-border flex items-center gap-2">
          <span className="text-y-accent">//</span>
          TRENDING
        </h2>
        <div className="fade-in-stagger">
          {trends.map((trend, i) => (
            <div key={i} className="p-4 hover:bg-y-darker transition-colors cursor-pointer border-b border-y-border last:border-b-0">
              <p className="text-[10px] text-y-muted uppercase tracking-wider">{trend.category}</p>
              <p className="trending-tag font-display font-semibold text-y-light mt-1">{trend.tag}</p>
              <p className="text-xs text-y-muted mt-1">{trend.posts} posts</p>
            </div>
          ))}
        </div>
        <button className="w-full p-4 text-y-accent font-body text-sm hover:bg-y-darker transition-colors text-left">
          {'>'} show more
        </button>
      </div>

      {/* Who to follow */}
      <div className="bg-y-card border-2 border-y-border">
        <h2 className="font-display font-bold text-lg p-4 border-b-2 border-y-border flex items-center gap-2">
          <span className="text-y-accent">//</span>
          CONNECT
        </h2>
        <div className="fade-in-stagger">
          {suggestions.map((user, i) => (
            <div key={i} className="p-4 flex items-center gap-3 hover:bg-y-darker transition-colors cursor-pointer border-b border-y-border last:border-b-0">
              <div className="avatar-ring w-10 h-10 bg-gradient-to-br from-y-accent/70 to-y-accent-dim/50 rounded-full flex items-center justify-center font-display font-bold text-y-dark text-sm">
                {user.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-sm truncate">{user.name}</p>
                <p className="text-y-muted text-xs truncate">{user.handle}</p>
              </div>
              <button className="btn-glitch px-3 py-1.5 bg-transparent border-2 border-y-accent text-y-accent font-body text-xs uppercase tracking-wider hover:bg-y-accent hover:text-y-dark transition-all">
                Follow
              </button>
            </div>
          ))}
        </div>
        <button className="w-full p-4 text-y-accent font-body text-sm hover:bg-y-darker transition-colors text-left">
          {'>'} show more
        </button>
      </div>

      {/* Footer links */}
      <div className="text-[10px] text-y-muted font-body leading-relaxed">
        <span className="hover:underline cursor-pointer">Terms</span>
        <span className="mx-1">·</span>
        <span className="hover:underline cursor-pointer">Privacy</span>
        <span className="mx-1">·</span>
        <span className="hover:underline cursor-pointer">Cookies</span>
        <span className="mx-1">·</span>
        <span className="hover:underline cursor-pointer">Accessibility</span>
        <p className="mt-2">&copy; 2024 Y Corp.</p>
      </div>
    </div>
  );
};
