import { useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import game1 from '@/assets/game-1.jpg';

const games = [
  {
    id: 1,
    title: "Block Puzzle",
    category: "Puzzle",
    rating: 4.8,
    plays: "1.2M",
    thumbnail: game1,
    url: "https://www.crazygames.com/embed/tetris"
  },
  {
    id: 2,
    title: "Space Runner",
    category: "Action",
    rating: 4.5,
    plays: "890K",
    thumbnail: game1,
    url: "https://www.crazygames.com/embed/slope"
  },
  {
    id: 3,
    title: "Word Quest",
    category: "Puzzle",
    rating: 4.7,
    plays: "650K",
    thumbnail: game1,
    url: "https://www.crazygames.com/embed/wordle"
  },
  {
    id: 4,
    title: "Racing Fever",
    category: "Racing",
    rating: 4.6,
    plays: "2.1M",
    thumbnail: game1,
    url: "https://www.crazygames.com/embed/moto-x3m"
  },
  {
    id: 5,
    title: "Tower Defense",
    category: "Strategy",
    rating: 4.9,
    plays: "1.8M",
    thumbnail: game1,
    url: "https://www.crazygames.com/embed/bloons-td"
  },
  {
    id: 6,
    title: "Ninja Jump",
    category: "Action",
    rating: 4.4,
    plays: "750K",
    thumbnail: game1,
    url: "https://www.crazygames.com/embed/ninja-vs-evilcorp"
  }
];

interface GamesSectionProps {
  onGameSelect: (game: any) => void;
}

export function GamesSection({ onGameSelect }: GamesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Puzzle', 'Action', 'Racing', 'Strategy'];
  
  const filteredGames = selectedCategory === 'All' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Play</h2>
        <div className="flex space-x-2">
          {categories.map((category) => (
            <Badge 
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {filteredGames.map((game) => (
          <Card 
            key={game.id}
            className="group cursor-pointer bg-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card overflow-hidden"
            onClick={() => onGameSelect(game)}
          >
            <div className="relative aspect-square">
              <img 
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs text-white">{game.rating}</span>
              </div>
              <Badge className="absolute bottom-2 left-2 text-xs">
                {game.category}
              </Badge>
            </div>
            
            <div className="p-3">
              <h3 className="font-semibold text-sm mb-1 truncate">{game.title}</h3>
              <p className="text-xs text-muted-foreground">{game.plays} plays</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}