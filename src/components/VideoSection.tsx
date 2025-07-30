import { useState } from 'react';
import { Play, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import movie1 from '@/assets/movie-1.jpg';
import movie2 from '@/assets/movie-2.jpg';

const videos = [
  {
    id: 1,
    title: "Galactic Warriors",
    duration: "2h 15m",
    rating: 8.5,
    thumbnail: movie1,
    description: "Epic space battle adventure"
  },
  {
    id: 2,
    title: "Mystic Portal",
    duration: "1h 48m",
    rating: 9.1,
    thumbnail: movie2,
    description: "Fantasy realm exploration"
  },
  {
    id: 3,
    title: "Neon Runner",
    duration: "1h 32m",
    rating: 7.8,
    thumbnail: movie1,
    description: "Cyberpunk thriller"
  },
  {
    id: 4,
    title: "Ocean Deep",
    duration: "2h 3m",
    rating: 8.9,
    thumbnail: movie2,
    description: "Underwater adventure"
  }
];

interface VideoSectionProps {
  onVideoSelect: (video: any) => void;
}

export function VideoSection({ onVideoSelect }: VideoSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Watch</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {videos.map((video) => (
          <Card 
            key={video.id}
            className="group cursor-pointer bg-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card overflow-hidden"
            onClick={() => onVideoSelect(video)}
          >
            <div className="relative aspect-square">
              <img 
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
              <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs text-white">{video.rating}</span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-sm mb-1 truncate">{video.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{video.description}</p>
              <span className="text-xs text-muted-foreground">{video.duration}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}