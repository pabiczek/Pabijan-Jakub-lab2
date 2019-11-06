document.body.addEventListener('keypress', onKeyPress)
document.querySelector('#channel3Rec')
.addEventListener('click', btnChannel3Click)

document.querySelector('#channel3play').addEventListener('click', playChannel3)




let channel3Start
const channel3 = []



function playChannel3() {
    channel3.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}






function onKeyPress(e) {

    playSound(sounds[e.code]);
    const time = Date.now() - channel3Start;
    const sound = {
        sound: e.code,
        time: time
    }
    channel3.push(sound)
}




function btnChannel3Click() {
    channel3Start = Date.now()
} 

