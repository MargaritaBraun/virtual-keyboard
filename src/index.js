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
let lastClicked = buttons[0];
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    lastClicked.classList.remove("active");
    this.classList.add("active");
    lastClicked = this;
  });
}

// console.log(buttons);

/*
    if (event.target === button.classList.contains("active")) {
      console.log(event.target);
      button.classList.remove("active");
    }
    button.classList.add("active"); */
// console.log(backspace)
/*
const backspace = document.querySelector("[value = backspace]");
const backspacetask = () => {
  backspace.addEventListener("click", () => {
    this.properties.value = this.properties.value.substring(
      0,
      this.properties.value.length - 1
    );
    this._triggerEvent("oninput");
    _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },
  });
}
backspacetask();
case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");

          keyElement.addEventListener("click", () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1
            );
            this._triggerEvent("oninput");
          });
/*const allbuttons = () => {
  document.querySelectorAll(".text_input_field").forEach((element) => {
    element.addEventListener("focus", () => {
      this.open(element.value, (currentValue) => {
        element.value = currentValue;
      });
    });
  });
};
allbuttons();
*/
