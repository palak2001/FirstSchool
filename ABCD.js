window.addEventListener('keydown',play);

function play(e)
{
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key= document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(key);
    if(!audio)
    return;
    audio.play();
    key.classList.add('highlight');
}

const keys=document.querySelector('.key');
keys.classList.remove("highlight");
