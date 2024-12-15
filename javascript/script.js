document.addEventListener('DOMContentLoaded', () => {
  const musicGroups = document.querySelectorAll('.div-musica');

  musicGroups.forEach(group => {
    const audioPlayer = group.querySelector('.audioPlayer');
    const playButton = group.querySelector('.playAudio');
    const pauseButton = group.querySelector('.pauseAudio');

    
    playButton.addEventListener('click', () => {
      audioPlayer.play(); 
    });

    pauseButton.addEventListener('click', () => {
      audioPlayer.pause(); 
    });
  });
});