import { FC } from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'explore', label: 'Explore', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
  { id: 'notifications', label: 'Alerts', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
  { id: 'messages', label: 'Messages', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
  { id: 'bookmarks', label: 'Saved', icon: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z' },
  { id: 'profile', label: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
];

export const Sidebar: FC<SidebarProps> = ({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen w-64 lg:w-[275px] bg-y-dark z-50
        transform transition-transform duration-300 ease-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        border-r-2 border-y-border lg:border-r-0
      `}>
        <div className="flex flex-col h-full p-4 lg:p-6">
          {/* Logo */}
          <div className="mb-8 flex items-center justify-between">
            <h1
              className="font-display text-5xl font-black text-y-accent glitch-text cursor-pointer"
              data-text="Y"
            >
              Y
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-y-muted uppercase tracking-widest">live</span>
              <span className="w-2 h-2 bg-y-accent rounded-full animate-pulse" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 fade-in-stagger">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileOpen(false);
                }}
                className={`
                  w-full flex items-center gap-4 px-4 py-3 mb-2 rounded-none
                  font-body text-sm tracking-wide uppercase
                  transition-all duration-200
                  ${activeTab === item.id
                    ? 'bg-y-accent text-y-dark font-bold'
                    : 'text-y-light hover:bg-y-card hover:pl-6'
                  }
                `}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d={item.icon} />
                </svg>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Post Button */}
          <button className="btn-glitch w-full py-4 bg-y-accent text-y-dark font-display font-bold text-lg uppercase tracking-wider hover:bg-y-accent-dim transition-colors">
            Post
          </button>

          {/* User */}
          <div className="mt-6 flex items-center gap-3 p-3 hover:bg-y-card transition-colors cursor-pointer">
            <div className="avatar-ring w-10 h-10 bg-gradient-to-br from-y-accent to-y-accent-dim rounded-full flex items-center justify-center font-display font-bold text-y-dark">
              U
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-semibold text-sm truncate">user_0x</p>
              <p className="text-y-muted text-xs truncate">@user_0x</p>
            </div>
            <svg className="w-4 h-4 text-y-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01" />
            </svg>
          </div>
        </div>
      </aside>
    </>
  );
};
