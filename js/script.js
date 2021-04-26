console.log("Hello marynarze!");
let html = document.querySelector("html");
let removeAll = document.querySelector(".js-article__button");
let showContact = document.querySelector(".js-footer__button");
let contact = document.querySelector(".js-footer");

removeAll.addEventListener("click",()=>{
html.remove()
})

showContact.addEventListener("click", () =>
  contact.classList.toggle("footer--important")
);


const select = document.querySelector("select");
const paragraphJS = document.querySelector(".js-article__paragraph");

select.addEventListener("change", () => {
  const choice = select.value;
  switch (choice) {
    case "little":
      paragraphJS.textContent = "Jeśli czujesz lekki głod, powinieneś zjeść tosty";
      break;
    case "average":
      paragraphJS.textContent = "Jeśli jestes głodny zjedz Poki Bowl";
      break;
    case "very":
      paragraphJS.textContent = "Jeśli jesteś bardzo głodny zjedz, kilka bajgli i sushi";
      break;
    case "unhungry":
      paragraphJS.textContent = "Jeśli nie czujesz głodu zamknij lodówkę i idź na spacer";
      break;
    default:
      paragraphJS.paragraphJS = "Jeśli nic nie jesz to chyba jesteś z innej planety."
  }
});

let backgroundThemeChange = document.querySelector(".js-article__select");
let body = document.querySelector(".js-body");
backgroundThemeChange.addEventListener("change", () => {
  let newColors = backgroundThemeChange.value;
  switch (newColors) {
    case "#ffffff":
      update("#ffffff", "#cc0033");
      break;
    case "#ee9c7e":
      update("#ee9c7e", "#ffffff");
      break;
    case "#03254c":
      update("#03254c", "#ffffff");
      break;
    case "#000000":
      update("#000000", "#00ffff");
      break;
    case "#cc0033":
      update("#cc0033", "#ffffff");
      break;
    case "#ffc400":
      update("#ffc400", "#ffffff");
      break;
    default:
      update("#ffffff", "#000000")
  }

  function update(bgColor, textColor) {
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;

  }
});