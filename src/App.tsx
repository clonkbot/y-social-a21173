import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { TrendingPanel } from './components/TrendingPanel';
import { MobileNav } from './components/MobileNav';
import './styles.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <div className="min-h-screen bg-y-dark text-y-light font-body relative overflow-x-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Scanline effect */}
      <div className="scanlines" />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-y-dark/90 backdrop-blur-sm border-b-2 border-y-accent">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-y-accent/10 transition-colors"
            >
              <div className="w-6 h-0.5 bg-y-accent mb-1.5" />
              <div className="w-4 h-0.5 bg-y-accent mb-1.5" />
              <div className="w-5 h-0.5 bg-y-accent" />
            </button>
            <h1 className="font-display text-3xl font-bold text-y-accent glitch-text" data-text="Y">Y</h1>
            <div className="w-10" />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 max-w-[1400px] mx-auto w-full">
          {/* Desktop Sidebar */}
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isMobileOpen={isMobileMenuOpen}
            setIsMobileOpen={setIsMobileMenuOpen}
          />

          {/* Feed */}
          <main className="flex-1 border-x-2 border-y-border min-h-screen pt-16 lg:pt-0 pb-20 lg:pb-0">
            <Feed />
          </main>

          {/* Trending Panel - Desktop only */}
          <aside className="hidden xl:block w-[350px] p-4">
            <TrendingPanel />
          </aside>
        </div>

        {/* Mobile Bottom Nav */}
        <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Footer */}
        <footer className="hidden lg:block fixed bottom-0 left-0 right-0 z-40 bg-y-dark/80 backdrop-blur-sm border-t border-y-border/30">
          <div className="max-w-[1400px] mx-auto px-4 py-2 text-center">
            <p className="text-xs text-y-muted font-body tracking-wide">
              Requested by <span className="text-y-accent/70">@s1s21s21</span> · Built by <span className="text-y-accent/70">@clonkbot</span>
            </p>
          </div>
        </footer>
      </div>

      {/* Mobile Footer - shown in feed */}
    </div>
  );
}

export default App;
