document.body.addEventListener('keypress', onKeyPress)
document.querySelector('#channel2Rec')
.addEventListener('click', btnChannel2Click)

document.querySelector('#channel2play').addEventListener('click', playChannel2)




let channel2Start
const channel2 = []



function playChannel2() {
    channel2.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}





function onKeyPress(e) {

    playSound(sounds[e.code]);
    const time = Date.now() - channel2Start;
    const sound = {
        sound: e.code,
        time: time
    }
    channel2.push(sound)
} 




function btnChannel2Click() {
    channel2Start = Date.now()
}





/* do drumkit2
document.body.addEventListener('keypress', onKeyPress2)
document.querySelector('#channel2Rec')


.addEventListener('click', btnChannel2Click)    //do zrobienia
document.querySelector('#channel2play').addEventListener('click', playChannel2)     //do zrobienia (moze channel2)

let channel2Start
const channel2 = []

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

function playChannel2() {       //moze channel2
    channel1.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}


function onKeyPress2(e) {       //moze onKeyPress bez 2

    playSound(sounds[e.code]);
    const time = Date.now() - channel2Start;
    const sound = {
        sound: e.code,
        time: time
    }
    channel2.push(sound)
}

function playSound(id) {
    const audioTag = document.querySelector(id)
     audioTag.currentTime = 0
     audioTag.play()
     
 }

 function btnChannel2Click() {
    channel2Start = Date.now()
} */
