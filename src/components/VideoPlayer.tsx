import { X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface VideoPlayerProps {
  video: any;
  onClose: () => void;
}

export function VideoPlayer({ video, onClose }: VideoPlayerProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-surface border-border">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h3 className="font-semibold">{video.title}</h3>
            <p className="text-sm text-muted-foreground">{video.description}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="aspect-video bg-black flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="w-16 h-16 mx-auto mb-4 bg-surface rounded-full flex items-center justify-center">
              📹
            </div>
            <p>Video player would be embedded here</p>
            <p className="text-sm mt-2">
              In production, this would show the actual video content
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}