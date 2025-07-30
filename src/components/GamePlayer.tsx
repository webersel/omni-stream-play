import { X, Maximize2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface GamePlayerProps {
  game: any;
  onClose: () => void;
}

export function GamePlayer({ game, onClose }: GamePlayerProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl h-[90vh] bg-surface border-border flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h3 className="font-semibold">{game.title}</h3>
            <p className="text-sm text-muted-foreground">{game.category} • {game.plays} plays</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm">
              <Maximize2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex-1 bg-black">
          <iframe
            src={game.url}
            className="w-full h-full border-0"
            allowFullScreen
            title={game.title}
          />
        </div>
      </Card>
    </div>
  );
}