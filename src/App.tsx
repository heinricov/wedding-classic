import React, { useState } from 'react';
import Cover from './components/Cover';
import Detail from './components/Detail';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const handleOpen = () => {
    setIsDetailVisible(true);
    // Enable scrolling when detail is visible
    document.body.style.overflow = 'auto';
  };

  // Disable scrolling when only cover is visible
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      {!isDetailVisible && <Cover onOpen={handleOpen} />}
      <Detail isVisible={isDetailVisible} />
      <MusicPlayer showPlayer={isDetailVisible} />
    </div>
  );
}

export default App;