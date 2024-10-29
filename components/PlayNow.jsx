// components/PlayNow.js
import { usePlayNowContext } from '@/pages/context/PlayNowContext';
import styles from '@/styles/components/PlayNow.module.css';

const PlayNow = () => {
  const { currentTrack, isPlaying, togglePlayPause } = usePlayNowContext();

  if (!currentTrack) return null; // Show nothing if no track is selected

  return (
    <div className={styles.playNowCard}>
      <h3>Now Playing</h3>
      <p>{currentTrack.name} - {currentTrack.artist}</p>
      <button className={styles.controlButton} onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default PlayNow;
