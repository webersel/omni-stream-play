import { X, RefreshCw, Home } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface WebProxyProps {
  url: string;
  onClose: () => void;
}

export function WebProxy({ url, onClose }: WebProxyProps) {
  const [currentUrl, setCurrentUrl] = useState(url);
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate refresh
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleUrlChange = (newUrl: string) => {
    setCurrentUrl(newUrl);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl h-[90vh] bg-surface border-border flex flex-col">
        <div className="flex items-center space-x-4 p-4 border-b border-border">
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={handleRefresh} disabled={isLoading}>
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
          <Button variant="ghost" size="sm">
            <Home className="w-4 h-4" />
          </Button>
          <Input
            value={currentUrl}
            onChange={(e) => handleUrlChange(e.target.value)}
            className="flex-1 bg-surface border-border"
            placeholder="Enter URL..."
          />
        </div>
        
        <div className="flex-1 bg-white">
          <iframe
            src={currentUrl}
            className="w-full h-full border-0"
            title="Web Proxy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </Card>
    </div>
  );
}