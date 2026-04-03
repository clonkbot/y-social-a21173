import { FC, useState } from 'react';
import { Post } from './Post';
import { ComposeBox } from './ComposeBox';

const mockPosts = [
  {
    id: '1',
    author: { name: 'cipher_punk', handle: '@cipher_punk', avatar: 'C' },
    content: 'just pushed a commit at 3am. the code works but i have no idea why. this is the way.',
    timestamp: '2m',
    likes: 142,
    reposts: 23,
    replies: 8,
    views: '2.4K',
  },
  {
    id: '2',
    author: { name: 'neo_designer', handle: '@neo_designer', avatar: 'N' },
    content: 'hot take: brutalist design is just minimalism for people who like to feel edgy. \n\nand i\'m here for it.',
    timestamp: '15m',
    likes: 891,
    reposts: 156,
    replies: 234,
    views: '12.8K',
  },
  {
    id: '3',
    author: { name: 'data_witch', handle: '@data_witch', avatar: 'D' },
    content: 'reminder that every "AI breakthrough" is just statistics in a trench coat pretending to be intelligence',
    timestamp: '1h',
    likes: 2341,
    reposts: 892,
    replies: 456,
    views: '89.2K',
  },
  {
    id: '4',
    author: { name: 'void_runner', handle: '@void_runner', avatar: 'V' },
    content: 'the year is 2024. we have AI that can write poetry but still can\'t make printers work reliably. priorities.',
    timestamp: '2h',
    likes: 567,
    reposts: 89,
    replies: 45,
    views: '5.6K',
  },
  {
    id: '5',
    author: { name: 'glitch_artist', handle: '@glitch_artist', avatar: 'G' },
    content: 'new generative art drop incoming. corrupted data never looked so beautiful.\n\n[SIGNAL//LOST]',
    timestamp: '3h',
    likes: 234,
    reposts: 67,
    replies: 23,
    views: '3.2K',
  },
  {
    id: '6',
    author: { name: 'terminal_dreams', handle: '@terminal_dreams', avatar: 'T' },
    content: 'imagine explaining to someone from the 90s that in 2024 we\'d be arguing with AI chatbots about whether they\'re sentient',
    timestamp: '4h',
    likes: 1892,
    reposts: 445,
    replies: 267,
    views: '45.1K',
  },
];

export const Feed: FC = () => {
  const [activeFilter, setActiveFilter] = useState('foryou');
  const [posts, setPosts] = useState(mockPosts);

  const handleNewPost = (content: string) => {
    const newPost = {
      id: Date.now().toString(),
      author: { name: 'user_0x', handle: '@user_0x', avatar: 'U' },
      content,
      timestamp: 'now',
      likes: 0,
      reposts: 0,
      replies: 0,
      views: '0',
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 lg:top-0 z-30 bg-y-dark/80 backdrop-blur-md border-b-2 border-y-border">
        <div className="flex">
          <button
            onClick={() => setActiveFilter('foryou')}
            className={`flex-1 py-4 text-center font-body text-sm uppercase tracking-wider transition-all relative
              ${activeFilter === 'foryou' ? 'text-y-accent' : 'text-y-muted hover:text-y-light'}
            `}
          >
            <span className={activeFilter === 'foryou' ? 'live-pulse pl-4' : ''}>For You</span>
            {activeFilter === 'foryou' && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-y-accent" />
            )}
          </button>
          <button
            onClick={() => setActiveFilter('following')}
            className={`flex-1 py-4 text-center font-body text-sm uppercase tracking-wider transition-all relative
              ${activeFilter === 'following' ? 'text-y-accent' : 'text-y-muted hover:text-y-light'}
            `}
          >
            <span className={activeFilter === 'following' ? 'live-pulse pl-4' : ''}>Following</span>
            {activeFilter === 'following' && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-y-accent" />
            )}
          </button>
        </div>
      </header>

      {/* Compose */}
      <ComposeBox onPost={handleNewPost} />

      {/* Posts */}
      <div className="fade-in-stagger">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>

      {/* Mobile Footer */}
      <div className="lg:hidden py-8 px-4 border-t border-y-border/30 mt-4">
        <p className="text-[11px] text-y-muted font-body tracking-wide text-center">
          Requested by <span className="text-y-accent/60">@s1s21s21</span> · Built by <span className="text-y-accent/60">@clonkbot</span>
        </p>
      </div>
    </div>
  );
};
