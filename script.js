const toggleBurger = () => {
    let burgerIcon = document.getElementById('burger');
    let dropMenu = document.getElementById('navbarBasicExample');
    burgerIcon.classList.toggle('is-active');
    dropMenu.classList.toggle('is-active');
  };


let message = document.getElementById('context')
    
  
const messages = ["You are amazing and you are perfect the way you are",
                    "Everything will be alright and you are strong enough even if you don't think you are",
                    "Even if you don't believe in yourself, just know that I believe in you and that I'm here to support you",
                    "My favorite character once said 'to indeed be a god', and that we shall be.",
                    "You are one heck of a person :>>",
                    "You are strong!!! say it with me, YOU ARE STRONG!!!!",
                    "Let LENI Lead!!!",
                    "You'll be fine partner🤠",
                    "Laugh4apurpose Raising Mental Health Awareness @Laugh4APurpose a movement created by a dear friend of mine ",
                    "You matter!, despite the horrible things said and done to you by other people.<3",
                    "Kung BBM ka stop using my website :<< have a great day tho",
                    "IMISSYOU3000",
                    "You make me feer speciar",
                    "I need money, We all need money, Let's not get worked up on petty people",
                    "Send me food please!!!!",
                    "Donate my Gcash Number is 09609129598"]

  message.innerHTML = "click the button"

function textMessage(){
  message.innerHTML = messages[Math.floor(Math.random() * messages.length)];
}
function gH(){
  window.location = 'https://github.com/Ben-Sicat'
}
function fB(){
  window.location = 'https://www.facebook.com/cer.ben.75/'
}
function tW(){
  window.location = 'https://twitter.com/http_sirben'
}
function lD(){
  window.location = 'https://www.linkedin.com/in/benito-raphael-iv-sicat-aa5b89223/'
}