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
      <DialogContent className="max-w-lg bg-black/95 border-2 border-green-500/50 shadow-[0_0_30px_rgba(0,255,0,0.3)] backdrop-blur-xl">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-green-400/70 hover:text-green-300 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse" />
              <Sparkles className="h-12 w-12 text-green-400 relative z-10" />
            </div>
          </div>
          
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
            Welcome to Your AI Empire Clone! 🎉
          </DialogTitle>
          
          <DialogDescription className="text-center text-green-300/90 text-base">
            Congratulations! You've successfully cloned the ultimate AI tools directory.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <p className="text-green-200/80 text-center text-sm">
            This is YOUR copy now. Here's what you can do:
          </p>
          
          <div className="grid gap-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <Rocket className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-green-300 text-sm">Explore 100+ AI Tools</h4>
                <p className="text-green-200/70 text-xs">Browse custom GPTs for writing, coding, creativity, and more</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <Brain className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-cyan-300 text-sm">Learn AI Mastery</h4>
                <p className="text-cyan-200/70 text-xs">Each tool teaches you how to leverage AI for real-world tasks</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <Zap className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-purple-300 text-sm">Customize & Expand</h4>
                <p className="text-purple-200/70 text-xs">Add your own tools, modify the design, make it yours!</p>
              </div>
            </div>
          </div>
        </div>

        <Button 
          onClick={handleClose}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold py-3 shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all hover:shadow-[0_0_30px_rgba(0,255,0,0.5)]"
        >
          Start Exploring →
        </Button>
        
        <p className="text-center text-green-400/50 text-xs">
          Welcome to the Matrix, Neo. 🐇
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeBubble;
