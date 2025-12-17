import * as React from 'react';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles, Rocket, Brain, Zap, X } from 'lucide-react';

const WELCOME_SEEN_KEY = 'aiempire-welcome-seen';

const WelcomeBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen welcome message AND has accepted disclaimer
    const hasSeenWelcome = localStorage.getItem(WELCOME_SEEN_KEY);
    const hasAccepted = localStorage.getItem('aitools-consent-v3');
    
    // Only show if disclaimer accepted AND haven't seen welcome
    if (hasAccepted && !hasSeenWelcome) {
      // Small delay for smooth appearance after page load
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(WELCOME_SEEN_KEY, 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-sm bg-black/95 border border-green-500/40 shadow-[0_0_20px_rgba(0,255,0,0.2)] backdrop-blur-xl p-4">
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 text-green-400/70 hover:text-green-300 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        
        <DialogHeader className="space-y-2">
          <div className="flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-green-400" />
          </div>
          
          <DialogTitle className="text-lg font-bold text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Welcome to Your AI Empire Clone! 🎉
          </DialogTitle>
          
          <DialogDescription className="text-center text-green-300/80 text-sm">
            You've cloned the ultimate AI directory. It's yours now!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 py-2">
          <div className="flex items-center gap-2 p-2 rounded bg-green-500/10 border border-green-500/20">
            <Rocket className="h-4 w-4 text-green-400 flex-shrink-0" />
            <p className="text-green-200/80 text-xs"><strong>2000+ AI Tools</strong> to explore & learn from</p>
          </div>
          
          <div className="flex items-center gap-2 p-2 rounded bg-cyan-500/10 border border-cyan-500/20">
            <Brain className="h-4 w-4 text-cyan-400 flex-shrink-0" />
            <p className="text-cyan-200/80 text-xs"><strong>Master AI</strong> with real-world GPT examples</p>
          </div>
          
          <div className="flex items-center gap-2 p-2 rounded bg-purple-500/10 border border-purple-500/20">
            <Zap className="h-4 w-4 text-purple-400 flex-shrink-0" />
            <p className="text-purple-200/80 text-xs"><strong>Customize</strong> & make it your own!</p>
          </div>
        </div>

        <Button 
          onClick={handleClose}
          size="sm"
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-medium text-sm"
        >
          Start Exploring →
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeBubble;
