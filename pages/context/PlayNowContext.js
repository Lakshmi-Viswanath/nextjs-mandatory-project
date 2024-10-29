// context/PlayNowContext.js
import { createContext, useContext, useState } from 'react';

const PlayNowContext = createContext();

export const PlayNowProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayNowContext.Provider value={{ currentTrack, isPlaying, playTrack, togglePlayPause }}>
      {children}
    </PlayNowContext.Provider>
  );
};

export const usePlayNowContext = () => useContext(PlayNowContext);
