import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { VideoSection } from '@/components/VideoSection';
import { MusicSection } from '@/components/MusicSection';
import { GamesSection } from '@/components/GamesSection';
import { UnblockSection } from '@/components/UnblockSection';
import { VideoPlayer } from '@/components/VideoPlayer';
import { GamePlayer } from '@/components/GamePlayer';
import { WebProxy } from '@/components/WebProxy';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const [proxyUrl, setProxyUrl] = useState('');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Hero />;
      case 'watch':
        return <VideoSection onVideoSelect={setSelectedVideo} />;
      case 'listen':
        return <MusicSection />;
      case 'play':
        return <GamesSection onGameSelect={setSelectedGame} />;
      case 'unblock':
        return <UnblockSection onSiteLoad={setProxyUrl} />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}
      </main>

      {/* Modals */}
      {selectedVideo && (
        <VideoPlayer 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}
      
      {selectedGame && (
        <GamePlayer 
          game={selectedGame} 
          onClose={() => setSelectedGame(null)} 
        />
      )}
      
      {proxyUrl && (
        <WebProxy 
          url={proxyUrl} 
          onClose={() => setProxyUrl('')} 
        />
      )}
    </div>
  );
};

export default Index;
