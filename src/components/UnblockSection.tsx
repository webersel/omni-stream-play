import { useState } from 'react';
import { Globe, Search, ExternalLink, Shield, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { name: "YouTube", url: "youtube.com", icon: "🎥" },
  { name: "Twitter", url: "twitter.com", icon: "🐦" },
  { name: "Reddit", url: "reddit.com", icon: "📱" },
  { name: "Discord", url: "discord.com", icon: "💬" },
  { name: "TikTok", url: "tiktok.com", icon: "🎵" },
  { name: "Instagram", url: "instagram.com", icon: "📷" }
];

interface UnblockSectionProps {
  onSiteLoad: (url: string) => void;
}

export function UnblockSection({ onSiteLoad }: UnblockSectionProps) {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    
    setIsLoading(true);
    let formattedUrl = url.trim();
    
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = 'https://' + formattedUrl;
    }
    
    onSiteLoad(formattedUrl);
    setIsLoading(false);
  };

  const handleQuickLink = (siteUrl: string) => {
    setUrl(siteUrl);
    onSiteLoad('https://' + siteUrl);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Unblock</h2>
      
      <Card className="bg-gradient-surface border-border p-6">
        <div className="text-center mb-6">
          <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-lg font-semibold mb-2">Access Any Website</h3>
          <p className="text-sm text-muted-foreground">
            Bypass restrictions and browse freely with our secure proxy
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Enter website URL (e.g., youtube.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="pl-10 bg-surface border-border"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-primary"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Unblock Site"}
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </form>
        
        <div className="mt-6 grid grid-cols-3 gap-2">
          {quickLinks.map((site) => (
            <Button
              key={site.name}
              variant="outline"
              size="sm"
              onClick={() => handleQuickLink(site.url)}
              className="flex items-center space-x-2 bg-surface hover:bg-surface-hover border-border"
            >
              <span>{site.icon}</span>
              <span className="text-xs">{site.name}</span>
            </Button>
          ))}
        </div>
        
        <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Shield className="w-4 h-4" />
            <span>Secure</span>
          </div>
          <div className="flex items-center space-x-1">
            <Zap className="w-4 h-4" />
            <span>Fast</span>
          </div>
          <div className="flex items-center space-x-1">
            <Globe className="w-4 h-4" />
            <span>Anonymous</span>
          </div>
        </div>
      </Card>
    </div>
  );
}