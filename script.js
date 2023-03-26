const optionMenu = document.querySelector(".seleccion-menu"),
    seleccionBtn = optionMenu.querySelector(".seleccion-btn"),
    options = optionMenu.querySelectorAll(".OPCIONES"),
    sbtn_Text = optionMenu.querySelector(".sbtn_text");

seleccionBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", ()=> {
        let selectedOption = option.querySelector(".OPCIONES").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active")
    });
});