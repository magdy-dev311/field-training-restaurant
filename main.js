let menu = document.getElementById("menu");
let list = document.getElementById("list");

menu.onclick = () => {
  list.classList.toggle("list");
};

links = document.querySelectorAll(".min-link");
links.forEach((x) => {
  x.onclick = () => {
    list.classList.toggle("list");
  };
});
