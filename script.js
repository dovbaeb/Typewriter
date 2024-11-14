let x = 0;

//enlever les ', les ê, les ë.
let text = "C est là la promesse alléchante des GAFAM : nos smartphones, nos tablettes et nos ordinateurs sont devenus des lampes magiques, qui exaucent le moindre de nos désirs sans que nous ayons meme besoin de le formuler."

function goNext() {
  if (x == text.length) {

    //changer le lien ici pour mettre le prochain article
    window.location.href = "http://www.w3schools.com";
  }
}

document.getElementById("writerdiv").innerText = text;

const recognize = (e) =>{
    console.log(e.key)
};

document.addEventListener ("keypress", recognize);

function updatePosition() {
  document.getElementById('writerdiv').style.marginLeft = -x*9.375 + 'px';
}

const compare = (e) => {
  if (e.key == text[x]) {

    x ++;
    updatePosition();
    goNext();
    blinkYes();
  }
  console.log(e.key[x]);
  console.log(x);
}

document.addEventListener("keypress", compare);

function blinkYes() {
  if (x > 0) {
    document.getElementById('rouge').style.animation = 'blinker 0s linear infinite';
  }
}
