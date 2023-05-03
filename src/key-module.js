export class KeyButton {
  constructor({
    value, size, space, code
  }) {
    this.value = value;
    this.size = size;
    this.space = space;
    this.code = code;
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
    if (this.code) keyboard.setAttribute("code", this.code);
    keyboard.innerHTML = template;
    return keyboard;
  }
}
