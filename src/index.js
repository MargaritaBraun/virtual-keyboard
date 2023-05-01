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
const generateKeys = (data) => {
  let keys = [];
  data.forEach((key) => {
    keys.push(new KeyButton(key));
  });
  return keys;
};
renderKeyboardToDom(data);
