import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';

interface MusicPlayerContextType {
  isPlaying: boolean;
  togglePlay: () => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create a simple audio context with a short silent audio loop
    // In production, you would replace this with actual music
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    // Using a data URL for a very short silent audio
    audioRef.current.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  return (
    <MusicPlayerContext.Provider value={{ isPlaying, togglePlay }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within MusicPlayerProvider');
  }
  return context;
}
