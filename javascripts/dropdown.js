function selectCountry(imagesFlagIcon, event) {
     event.preventDefault();
     document.getElementById("selectedCountry").innerHTML = `<img src="${imagesFlagIcon}">`;
    landDropdown();
 }

function landDropdown(event) {
    console.log("Dropdown button clicked!");
    let dropdownIndhold = document.getElementById("listDropdown");
    dropdownIndhold.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdownIndhold");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


