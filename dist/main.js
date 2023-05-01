(()=>{
  class e {
    constructor({ value: e, size: t }) { this.value = e, this.size = t; }

    generateKey() { let e = ""; let t = document.createElement("button"); if (t.className = "key", console.log(t), this.size) { let e = `${this.size}`; t.style.width = e; } return t.setAttribute("value", this.value), this.value && (e += `<span">${this.value}`, e += "</span>"), t.innerHTML = e, t; }
  } let t = document.querySelector(".key__container"); (t=>{ let s = []; return t.forEach((t=>{ s.push(new e(t)); })), s; })([{ value: "h", size: "100px" }, { value: "f", size: "30px" }, { value: "j", size: "50px" }, { value: "K", size: "130px" }, { value: "L", size: "30px" }]).forEach((e=>{ t.append(e.generateKey()); }));
})();
// # sourceMappingURL=main.js.map
