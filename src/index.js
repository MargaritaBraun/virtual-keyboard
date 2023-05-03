/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
import { KeyButton } from "./key-module";
import { data } from "./key";

let placeKeyboard = document.querySelector(".key__container");

// eslint-disable-next-line no-shadow
const renderKeyboardToDom = () => {
  // eslint-disable-next-line no-use-before-define
  generateKeys(data).forEach((keyboard) => {
    placeKeyboard.append(keyboard.generateKey());
  });
};

const generateKeys = () => {
  let keys = [];
  data.forEach((key) => {
    keys.push(new KeyButton(key));
  });
  return keys;
};
renderKeyboardToDom(data);

let enterlinebutton = document.querySelectorAll("[space]");
const lineBreak = () => {
  enterlinebutton.forEach((space) => {
    const brElement = document.createElement("br");
    space.after(brElement);
  });
};

lineBreak();

const buttons = document.querySelectorAll(".key");

placeKeyboard.addEventListener("click", (event) => {
  // Отлавливаем элемент в родители на который мы нажали
  let activeKey = event.target.closest(".key");

  // Проверяем тот ли это элемент который нам нужен
  if (event.target.closest(".key")) {
    for (let i = 0; i < buttons.length; i++) {
      // Убираем у других
      buttons[i].classList.remove("active");
    }
    // Добавляем тому на который нажали
    activeKey.classList.add("active");
    let attribyteActiveKey = activeKey.getAttribute("code");
    // console.log(mainTextArea.value);

    // addsymbolToText();
    // console.log(contentArea.innerHTML = 'Привет');
    // contentArea = mainTextArea.value += attribyteActiveKey;
    let attribyteActiveKeyValue = activeKey.getAttribute("value");
    contentArea = mainTextArea.value += attribyteActiveKeyValue;
  }
});

const mainTextArea = document.querySelector(".text_input_field");
let contentArea = mainTextArea.value;
const addsymbolToText = (codeKey) => {
  mainTextArea.addEventListener("input", () => {
    contentArea = mainTextArea.value;
    let lastsymbol = contentArea[contentArea.length - 1];
    let lastsymbolCAPS = lastsymbol.toUpperCase()
    console.log(lastsymbol.toUpperCase());
    // console.log(codeKey);
    //dkdkkd(lastsymbol);
    
    function findletterINKEY() {
      //console.log(codeKey);
      //console.log(lastsymbol);
      let keyScreenActive = document.querySelector(
        `.key[value=${lastsymbolCAPS}]`
      );
      //console.log(keyScreenActive);
      for (let i = 0; i < buttons.length; i++) {
        // Убираем у других
        buttons[i].classList.remove("active");
      }
      
      keyScreenActive.classList.add("active");
      
      /*
      buttons.forEach(button => {
        button.hasAttribute([value === lastsymbol])
      })
      console.log(buttons.value);
      */
    }
    findletterINKEY();
  });
};

mainTextArea.addEventListener("keydown", (event) => {
  
  // console.log(`event.key ${event.key} event.code ${event.code}`);
  let codeKey = `${event.code}`;
  // console.log(buttons);
  let ffhfh = buttons[`code:${codeKey}`];
  addsymbolToText(codeKey);
  

  // console.log(ffhfh)
  // let addletter = mainTextArea.push(ffhfh);
  // console.log(addletter);
});

/*
placeKeyboard.addEventListener("click", (event) => {
  console.log(event.target);

});

placeKeyboard.addEventListener("keydown", function (index) {
  for (let i = 0; i < button.length; i++) {
    // UpperCase() method returns the value of the string converted to uppercase
    if (button[i].innerHTML == index.key.toUpperCase()) {
      button[i].classList.add("active");
    }
  }
  // innerHTML property is part of the Document Object Model
  p.innerHTML += index.key;
  if (index.key == "Backspace") {
    p.innerHTML = p.innerHTML.slice(0, -10);
  }
});
placeKeyboard.addEventListener("keyup", function (index) {
  for (let j = 0; j < button.length; j++) {
    if (button[j].innerHTML == index.key.toUpperCase()) {
      button[j].classList.remove("active");
    }
  }
});
*/
/*
const fff = () => {
buttons.forEach((button) => {
  button.classList.remove("active");
});
}

placeKeyboard.addEventListener("click", (event) => {
  console.log(event.target);
  buttons.forEach((button) => {
    if (event.target.closest(".key")) {
      button.classList.add("active");
      buttons.classList.remove("active");
    }
  });
});
*/

/*
let lastClicked = buttons[0];
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    lastClicked.classList.remove("active");
    this.classList.add("active");
    lastClicked = this;
  });
}
*/

/*
const searchKey = () => {

};
searchKey();
*/
// console.log(buttons);
