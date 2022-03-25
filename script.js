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
                    "You make me feer speciar"]

  message.innerHTML = "click the button"

function textMessage(){
  message.innerHTML = messages[Math.floor(Math.random() * messages.length)];
}