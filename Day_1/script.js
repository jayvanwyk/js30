window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(
    `audio[data-key="${e.key.toUpperCase()}"]`
  );
  const key = document.querySelector(`div[data-key="${e.key.toUpperCase()}"]`);
  if(key){
    key.classList.add('playing');
  }

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
});

const keys = document.querySelectorAll('.key');
keys.forEach(key=>{
    key.addEventListener('transitionend', (e)=>{
        if(e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    });
})
