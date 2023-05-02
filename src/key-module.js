export class KeyButton {
  constructor({ value, size, space }) {
    this.value = value;
    this.size = size;
    this.space = space;
  }

  generateKey() {
    let template = "";
    let keyboard = document.createElement("button");
    keyboard.className = "key";
    if (this.size) {
      let pullsize = `${this.size}`;
      keyboard.style.width = pullsize;
    }
    keyboard.setAttribute("value", this.value);
    if (this.value) {
      template += `<span">${this.value}`;
      template += "</span>";
    }
    if (this.space) keyboard.setAttribute("space", this.space);
    keyboard.innerHTML = template;
    return keyboard;
  }
}
