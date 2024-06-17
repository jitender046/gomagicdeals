import React, { useEffect } from 'react';

const DarkMode = () => {
  const bodyElement = document.body;

  const toggleDarkMode = () => {
    bodyElement.classList.toggle('dark-mode');
  };

  useEffect(() => {
    bodyElement.classList.add();
    return () => {
      bodyElement.classList.remove('dark-mode');
    };
  }, );

  return (
<label class="switch">
  <input type="checkbox"  onClick={toggleDarkMode}/>
  <div class="slider"></div>
  <div class="slider-card">
    <div class="slider-card-face slider-card-front"></div>
    <div class="slider-card-face slider-card-back"></div>
  </div>
</label>
  );
};

export default DarkMode;