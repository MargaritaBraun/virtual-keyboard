export class KeyButton {
  constructor({ value, size }) {
    this.value = value;
    this.size = size;
  }

  generateKey() {
    let template = "";
    let keyboard = document.createElement("button");
    keyboard.className = "key";
    console.log(keyboard);
    if (this.size) {
      let pullsize = `${this.size}`;
      keyboard.style.width = pullsize;
    }
    keyboard.setAttribute("value", this.value);
    if (this.value) {
      template += `<span">${this.value}`;
      template += "</span>";
    }

    keyboard.innerHTML = template;
    return keyboard;
  }
}
