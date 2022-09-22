const sounds = [
    {key: 'A', soundSrc: 'clap.wav', soundName: 'clap'},
    {key: 'S', soundSrc: 'hihat.wav', soundName: 'hihat'},
    {key: 'D', soundSrc: 'kick.wav', soundName: 'kick'},
    {key: 'F', soundSrc: 'openhat.wav', soundName: 'openhat'},
    {key: 'G', soundSrc: 'boom.wav', soundName: 'boom'},
    {key: 'H', soundSrc: 'ride.wav', soundName: 'ride'},
    {key: 'J', soundSrc: 'snare.wav', soundName: 'snare'},
    {key: 'K', soundSrc: 'tom.wav', soundName: 'tom'},
    {key: 'L', soundSrc: 'tink.wav', soundName: 'tink'}
];

const keyContainer = document.querySelector('.keys');

function createKey(keyToAdd){
    const newKey = document.createElement('div');
    newKey.classList.add('key');
    newKey.setAttribute('data-key', keyToAdd);
    return newKey;
}

function createKbd(keyToAdd){
    const kbd = document.createElement('kbd');
    kbd.innerText = keyToAdd;
    return kbd;
}

function createSpan(soundName){
    const span = document.createElement('span');
    span.classList.add('sound');
    span.innerText = soundName;
    return span;
}

function createAudio(keyToAdd, source){
    const audio = document.createElement('audio');
    audio.setAttribute('data-key', keyToAdd);
    audio.setAttribute('src', `sounds/${source}`);
    return audio;
}

function addSound(soundToAdd){
    const key = createKey(soundToAdd.key);
    key.appendChild(createKbd(soundToAdd.key));
    key.appendChild(createSpan(soundToAdd.soundName));
    key.appendChild(createAudio(soundToAdd.key, soundToAdd.soundSrc));
    key.addEventListener('transitionend', (e)=> {
        if(e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    })
    keyContainer.appendChild(key);
}

function init(){
    sounds.forEach(sound => addSound(sound));

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
}

init();



