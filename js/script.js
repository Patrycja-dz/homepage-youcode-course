{
  const welcome = () => {
    console.log("Hello marynarze!");
  }

  const remove = () => {
    const html = document.querySelector("html");
    const removeAll = document.querySelector(".js-article__button");
    removeAll.addEventListener("click", () => {
      html.remove();
    })
  }

  remove();

  const showOrHidden = () => {
    let showContact = document.querySelector(".js-footer__button");
    let contact = document.querySelector(".js-footer");
    showContact.addEventListener("click", () =>
      contact.classList.toggle("footer--important");
    );
  }

  showOrHidden();

  toggleTextContent = () => {

    const selectElement = document.querySelector("select");
    const choice = selectElement.value;
    const paragraphJS = document.querySelector(".js-article__paragraph");
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
        selectElement.addEventListener("change", (toggleTextContent));
    }


  }

  toggleTextContent();




  const toggleBackground = () => {
    const backgroundThemeChange = document.querySelector(".js-article__select");
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

  }
  const update = (bgColor, textColor) => {
    let body = document.querySelector(".js-body");
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;

  }
  const init = () => {
    const backgroundThemeChange = document.querySelector(".js-article__select");
    backgroundThemeChange.addEventListener("change", (toggleBackground)

    );
    welcome();
  }
  init();
}
