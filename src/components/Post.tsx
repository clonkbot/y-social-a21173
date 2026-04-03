import { FC, useState } from 'react';

interface PostProps {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  reposts: number;
  replies: number;
  views: string;
}

export const Post: FC<PostProps> = ({ author, content, timestamp, likes: initialLikes, reposts, replies, views }) => {
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <article className="post-card border-b-2 border-y-border px-4 py-4 cursor-pointer">
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="avatar-ring w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-y-accent/80 to-y-accent-dim/60 rounded-full flex items-center justify-center font-display font-bold text-y-dark text-sm md:text-base">
            {author.avatar}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-display font-semibold text-y-light text-sm md:text-base truncate">{author.name}</span>
            <span className="text-y-muted text-xs md:text-sm truncate">{author.handle}</span>
            <span className="text-y-muted text-xs">·</span>
            <span className="text-y-muted text-xs">{timestamp}</span>
          </div>

          {/* Post content */}
          <p className="mt-2 text-y-light text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words">
            {content}
          </p>

          {/* Actions */}
          <div className="flex items-center justify-between mt-4 max-w-md">
            {/* Reply */}
            <button className="icon-btn flex items-center gap-1 md:gap-2 text-y-muted group p-2 -ml-2">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-xs">{replies}</span>
            </button>

            {/* Repost */}
            <button
              onClick={() => setReposted(!reposted)}
              className={`icon-btn flex items-center gap-1 md:gap-2 p-2 ${reposted ? 'text-green-400' : 'text-y-muted'}`}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-xs">{reposted ? reposts + 1 : reposts}</span>
            </button>

            {/* Like */}
            <button
              onClick={handleLike}
              className={`icon-btn flex items-center gap-1 md:gap-2 p-2 ${liked ? 'text-red-500' : 'text-y-muted'}`}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-xs">{formatNumber(likeCount)}</span>
            </button>

            {/* Views */}
            <button className="icon-btn flex items-center gap-1 md:gap-2 text-y-muted p-2">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-xs hidden sm:inline">{views}</span>
            </button>

            {/* Bookmark */}
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`icon-btn p-2 ${bookmarked ? 'text-y-accent' : 'text-y-muted'}`}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill={bookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>

            {/* Share */}
            <button className="icon-btn text-y-muted p-2">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
