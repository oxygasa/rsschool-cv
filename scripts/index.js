let i = 0;
let txt = 'Java Script frontend developer//';
let speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("position-name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()
