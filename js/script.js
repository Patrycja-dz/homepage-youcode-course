{
  const welcome = () => {
    console.log("Hello marynarze!");
  };

  const onChangeToggleTableOnClick = () => {
    const toggleElement = document.querySelector(".js-table");
    const toggleNextText = document.querySelector(".js-toggleText");
    toggleElement.classList.toggle("table--hidden");
    toggleNextText.innerText = toggleElement.classList.contains("table--hidden") ? "Pokaż" : "Ukryj";

  };
  const changeTableVisibility = () => {
    const removeTableButton = document.querySelector(".js-article__button");
    removeTableButton.addEventListener("click", onChangeToggleTableOnClick);
    welcome();
  };

  changeTableVisibility();

  const toggleFooterDisplay = () => {
    const contact = document.querySelector(".js-footer");
    const toggleTextInButton = document.querySelector(".js-toggleFooterText");
    contact.classList.toggle("footer--hidden");
    toggleTextInButton.innerText = contact.classList.contains("footer--hidden") ? "Pokaż" : "Ukryj";

  };

  const changeFooterDisplayOnClick = () => {
    const showContactButton = document.querySelector(".js-footerHide__button");
    showContactButton.addEventListener("click", toggleFooterDisplay);

  };

  changeFooterDisplayOnClick();

  const toggleTextContent = () => {

    const selectElement = document.querySelector("select");
    const choice = selectElement.value;
    const paragraph = document.querySelector(".js-article__paragraph");
    switch (choice) {
      case "little":
        return paragraph.textContent = "Jeśli czujesz lekki głod, powinieneś zjeść tosty";

      case "average":
        return paragraph.textContent = "Jeśli jestes głodny zjedz Poki Bowl";

      case "very":
        return paragraph.textContent = "Jeśli jesteś bardzo głodny zjedz, kilka bajgli i sushi";

      case "unhungry":
        return paragraph.textContent = "Jeśli nie czujesz głodu zamknij lodówkę i idź na spacer";
    };
    const changeSelectValue = () => {
      const select = document.querySelector("select");
      select.addEventListener("change", (toggleTextContent));
    }
    changeSelectValue();
  }

  toggleTextContent();




  const toggleBackground = () => {
    const backgroundThemeChange = document.querySelector(".js-article__select");
    const newColors = backgroundThemeChange.value;

    switch (newColors) {
      case "#ffffff":
        updateBackgroundColors("#ffffff", "#cc0033");
        break;
      case "#ee9c7e":
        updateBackgroundColors("#ee9c7e", "#ffffff");
        break;
      case "#03254c":
        updateBackgroundColors("#03254c", "#ffffff");
        break;
      case "#000000":
        updateBackgroundColors("#000000", "#00ffff");
        break;
      case "#cc0033":
        updateBackgroundColors("#cc0033", "#ffffff");
        break;
      case "#ffc400":
        updateBackgroundColors("#ffc400", "#ffffff");
        break;
      default:
        update("#ffffff", "#000000")
    }

  }
  const updateBackgroundColors = (backgroundColor, textColor) => {
    const body = document.body
    body.style.backgroundColor = backgroundColor;
    body.style.color = textColor;

  }
  const init = () => {
    const backgroundThemeChange = document.querySelector(".js-article__select");
    backgroundThemeChange.addEventListener("change", (toggleBackground)

    );

  }
  init();
}