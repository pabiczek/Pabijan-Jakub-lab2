document.body.addEventListener('keypress', onKeyPress)
document.querySelector('#channel4Rec')
.addEventListener('click', btnChannel4Click)

document.querySelector('#channel4play').addEventListener('click', playChannel4)



let channel4Start
const channel4 = []



function playChannel4() {
    channel4.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}






function onKeyPress(e) {

    playSound(sounds[e.code]);
    const time = Date.now() - channel4Start;
    const sound = {
        sound: e.code,
        time: time
    }
    channel4.push(sound)
}





function btnChannel4Click() {
    channel4Start = Date.now()
} 

