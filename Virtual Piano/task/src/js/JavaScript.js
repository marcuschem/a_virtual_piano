function message(event){
    let array = ["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"];
    for (let myKey of array) {
        if (event.code === `Key${myKey}`) {
            let audio = new Audio(`./audio/${myKey}.mp3`);
            audio.play();
        }
    }
}

document.addEventListener("keydown", message);

