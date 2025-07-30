import { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import album1 from '@/assets/album-1.jpg';

const playlists = [
  { id: 1, name: "Lo-fi Chill", tracks: 24, cover: album1 },
  { id: 2, name: "Synthwave", tracks: 18, cover: album1 },
  { id: 3, name: "Game OST", tracks: 32, cover: album1 },
  { id: 4, name: "Focus Beats", tracks: 15, cover: album1 }
];

const currentTrack = {
  title: "Midnight Drive",
  artist: "Neon Dreams",
  duration: 245,
  cover: album1
};

export function MusicSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(120);
  const [volume, setVolume] = useState([75]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Listen</h2>
      
      {/* Current Player */}
      <Card className="bg-gradient-surface border-border p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img 
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{currentTrack.title}</h3>
            <p className="text-sm text-muted-foreground">{currentTrack.artist}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-muted-foreground">{formatTime(currentTime)}</span>
            <Slider
              value={[currentTime]}
              onValueChange={(value) => setCurrentTime(value[0])}
              max={currentTrack.duration}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground">{formatTime(currentTrack.duration)}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <SkipBack className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button variant="ghost" size="sm">
                <SkipForward className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <Volume2 className="w-4 h-4" />
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="w-20"
              />
            </div>
          </div>
        </div>
      </Card>
      
      {/* Playlists */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {playlists.map((playlist) => (
          <Card 
            key={playlist.id}
            className="group cursor-pointer bg-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card overflow-hidden"
          >
            <div className="relative aspect-square">
              <img 
                src={playlist.cover}
                alt={playlist.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-sm mb-1 truncate">{playlist.name}</h3>
              <p className="text-xs text-muted-foreground">{playlist.tracks} tracks</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}