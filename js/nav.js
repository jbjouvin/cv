function createMenu() {

    //Formations
    var menuFormations = document.createElement("a");
    menuFormations.className = "nav-link";
    menuFormations.href = "#formations";
    menuFormations.textContent = "Formations";
    var menuDropdownExp = document.getElementById("menuFormationsId");
    menuDropdownExp.appendChild(menuFormations);

    //Losirs
    var menuLoisirs = document.createElement("a");
    menuLoisirs.className = "nav-link";
    menuLoisirs.href = "#loisirs";
    menuLoisirs.textContent = "Loisirs";
    var menuDropdownExp = document.getElementById("menuLoisirsId");
    menuDropdownExp.appendChild(menuLoisirs);

    // experiences
    var expDivs = document.getElementById("experiences").getElementsByClassName("col-s12");
    var menuDropdownExp = document.getElementById("dropdownExperience")

    for (var i = 0; i < expDivs.length; i++) {

        var echoExpMenuLink = document.createElement("a");
        echoExpMenuLink.href = "#" + expDivs[i].id;
        echoExpMenuLink.className = "dropdown-item";
        echoExpMenuLink.textContent = expDivs[i].id;

        menuDropdownExp.appendChild(echoExpMenuLink)

    }
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        createMenu();
    }

};