window.addEventListener('keydown', (e)=>{
        const audio = document.querySelector(`audio[data-key="${e.key.toUpperCase()}"]`);
    console.log(audio);
    if(audio){
        audio.play();
    }
})