import { useState } from 'react';
import { Play, Music, Gamepad2, Globe, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'watch', label: 'Watch', icon: Play },
  { id: 'listen', label: 'Listen', icon: Music },
  { id: 'play', label: 'Play', icon: Gamepad2 },
  { id: 'unblock', label: 'Unblock', icon: Globe }
];

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="flex items-center justify-center space-x-1 bg-surface/80 backdrop-blur-lg border border-border rounded-full p-1 mx-auto w-fit">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300",
              "hover:bg-surface-hover",
              isActive && "bg-gradient-primary text-white shadow-glow"
            )}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}