import React, { useState, useRef, useEffect } from "react";
import { fonts } from "../constants/font";
import { Music4, VolumeX } from "lucide-react";
import { colors } from "../constants/colors";

interface MusicPlayerProps {
  showPlayer: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ showPlayer }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio when component mounts
  useEffect(() => {
    audioRef.current = new Audio("/music/background-music.mp3");
    audioRef.current.loop = true;

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Auto-play when cover is closed (showPlayer becomes true), but only once
  useEffect(() => {
    if (showPlayer && audioRef.current && !hasStartedPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setHasStartedPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
          });
      }
    }
  }, [showPlayer, hasStartedPlaying]);

  // Handle play/pause
  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
        setHasStartedPlaying(true);
      }
    } catch (error) {
      console.error("Error toggling audio:", error);
      setIsPlaying(false);
    }
  };

  if (!showPlayer) return null;

  return (
    <button
      onClick={togglePlay}
      className={`${fonts.body} fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 ${
        isPlaying ? "animate-pulse" : ""
      }`}
      style={{ backgroundColor: colors.primary, color: "white" }}
    >
      {isPlaying ? (
        <Music4 className="w-5 h-5" />
      ) : (
        <VolumeX className="w-5 h-5" />
      )}
    </button>
  );
};

export default MusicPlayer;
