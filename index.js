window.addEventListener("load",() => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.getElementsByClassName("visual")[0]
    console.log(visual);
    const colors = [
        '#EEEEF0',
        '#D0DDD6',
        '#98A299',
        '#797576',
        '#D4D2C3',
        '#ECF0D7'
    ]
    
    
    pads.forEach((pad,index) => {
        pad.addEventListener("click", ()=>{
            sounds[index].currentTime  = 0;
            sounds[index].play();
            createBubble(index);
        });
        
    });
    
    const createBubble = (index) => {
        const bubble = document.createElement("div")
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease-in-out';
        bubble.addEventListener('animationend',()=>{
            visual.removeChild(this)
        })
    }

    document.addEventListener('keydown', logKey);

    function logKey(e) {
        switch(e.code) {
            case "KeyQ" :
                sounds[0].currentTime  = 0;
                sounds[0].play();
                createBubble(0)
                break;

            case "KeyW" :
                sounds[1].currentTime  = 0;
                sounds[1].play();
                createBubble(1)
                break;
            
            case "KeyE" :
                sounds[2].currentTime  = 0;
                sounds[2].play();
                createBubble(2)
                break;

            case "KeyI" :
                sounds[3].currentTime  = 0;
                sounds[3].play();
                createBubble(3)
                break;
            
            case "KeyO" :
                sounds[4].currentTime  = 0;
                sounds[4].play();
                createBubble(4)
                break;
        
            case "KeyP" :
                sounds[5].currentTime  = 0;
                sounds[5].play();
                createBubble(5)
                break;
        }
    }

});