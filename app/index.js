document.addEventListener("DOMContentLoaded", function(event) {
    initLanguageSelect();
});

const initLanguageSelect = () => {
    const select = document.getElementById("language-select");
    const selectOptions = select.querySelector(".select-options");

    select.addEventListener("click",function (e) {
        selectOptions.style.visibility === 'hidden' ? selectOptions.style.visibility = 'visible' : selectOptions.style.visibility = 'hidden'
    });
};
