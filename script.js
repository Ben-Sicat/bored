const toggleBurger = () => {
    let burgerIcon = document.getElementById('burger');
    let dropMenu = document.getElementById('navbarBasicExample');
    burgerIcon.classList.toggle('is-active');
    dropMenu.classList.toggle('is-active');
  };


let message = document.getElementById('here')
    
  
const messages = ["You are amazing and you are perfect the way you are",
                    "Everything will be alright and you are strong enough even if you don't think you are",
                    "Even if you don't believe in yourself, just know that I believe in you and that I'm here to support you",
                    "My favorite character once said 'to indeed be a god'.",
                    "You are one heck of a person :>>",
                    "You are strong!!! say it with me, YOU ARE STRONG!!!!"]

  let index = 0;
function randomize(){
  index = Math.random(0,messages.length)
  console.log(index);
}
function textMessage(){
  message.textContent = messages[index]
}