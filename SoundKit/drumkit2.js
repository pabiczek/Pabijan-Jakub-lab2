document.body.addEventListener('keypress', onKeyPress)
document.querySelector('#channel1Rec')
.addEventListener('click', btnChannel1Click)

document.querySelector('#channel1play').addEventListener('click', playChannel1)




let channel1Start
const channel1 = []

const sounds = {
    KeyA: '#boom',
    KeyS: '#clap',
    KeyD: '#hihat',
    KeyF: '#kick',
    KeyG: '#openhat',
    KeyH: '#ride',
    KeyJ: '#snare',
    KeyK: '#tink',
    KeyL: '#tom', 
}

function playChannel1() {
    channel1.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}



function onKeyPress(e) {

    playSound(sounds[e.code]);
    const time = Date.now() - channel1Start;
    const sound = {
        sound: e.code,
        time: time
    }
    channel1.push(sound)
}


function playSound(id) {
    const audioTag = document.querySelector(id)
     audioTag.currentTime = 0
     audioTag.play()
     
 }


function btnChannel1Click() {
    channel1Start = Date.now()
} 

