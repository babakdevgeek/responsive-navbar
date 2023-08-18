function triger() {
  document.getElementById("navigation").classList.toggle("responsive");
}
const nav = document.getElementById("navigation");
const links = nav.getElementsByTagName("a");
const current = nav.getElementsByClassName("active");
console.log(links);
for (let i = 0; i > links.length; i++) {
  links[i].addEventListener("click", () => {
    if (current.length > 0) {
      current[0].className = current[0].classList.remove("active");
    }
    console.log(this);
    this.className += " active";
  });
}
