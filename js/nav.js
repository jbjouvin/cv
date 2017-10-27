function createMenu() {

    //Squelette:

    var menuSquelette = document.createElement("nav");
    menuSquelette.className = "navbar fixed-top navbar-expand-lg navbar-light bg-light nav-down";
    menuSquelette.id = "navMenuResume";

    // Gestion bouton responsive
    var boutonResponsiveMenu = document.createElement("button");
    boutonResponsiveMenu.className = "navbar-toggler";
    boutonResponsiveMenu.type = "button";
    boutonResponsiveMenu.setAttribute("data-toggle", "collapse");
    boutonResponsiveMenu.setAttribute("data-target", "#navbarNavDropdown");
    boutonResponsiveMenu.setAttribute("aria-controls", "navbarNavDropdown");
    boutonResponsiveMenu.setAttribute("aria-expanded", "false");
    boutonResponsiveMenu.setAttribute("aria-label", "Toggle navigation");

    var boutonResponsiveMenuSpanElt = document.createElement("span");
    boutonResponsiveMenuSpanElt.className = "navbar-toggler-icon";

    boutonResponsiveMenu.appendChild(boutonResponsiveMenuSpanElt);

    //div Menu
    var divMenuResponsive = document.createElement("div");
    divMenuResponsive.className = ("collapse navbar-collapse");
    divMenuResponsive.id = "navbarNavDropdown";

    var listDivMenuResponsive = document.createElement("ul");
    listDivMenuResponsive.className = "navbar-nav";

    MenuListToShow = document.getElementsByTagName("h3");
    for (var i = 0; i < MenuListToShow.length; i++) {

        var MenuListToShowElt = document.createElement("li");
        MenuListToShowElt.id = MenuListToShow[i].id
        MenuListToShowElt.className = "nav-item";
        switch (MenuListToShowElt.id) {
            case "experiencesH3":
                MenuListToShowElt.id = "dropdownExperience";
                MenuListToShowElt.className += "dropdown"

                var expTogglerElt = document.createElement("a");
                expTogglerElt.className = "nav-link dropdown-toggle";
                expTogglerElt.textContent = "Experiences";
                expTogglerElt.href = "#Experiences";
                expTogglerElt.id = "navbarDropdownMenuLink";
                expTogglerElt.setAttribute("data-toggle", "dropdown");
                expTogglerElt.setAttribute("aria-haspopup", "true");
                expTogglerElt.setAttribute("aria-expanded", "false");

                MenuListToShowElt.appendChild(expTogglerElt);

                var expDropDown = document.createElement("div");
                expDropDown.className = "dropdown-menu";
                expDropDown.setAttribute("aria-labelledby","navbarDropdownMenuLink")
                expDropDown.id = "dropdownExperience"

                MenuListToShowElt.appendChild(expDropDown);

                listDivMenuResponsive.appendChild(MenuListToShowElt);
                break;

            case "formationsH3":
                MenuListToShowElt.id = "menuFormationsId";
                listDivMenuResponsive.appendChild(MenuListToShowElt);
                break;

            case "loisirsH3":
                MenuListToShowElt.id = "menuLoisirsId";
                listDivMenuResponsive.appendChild(MenuListToShowElt);
                break;

            default:
                MenuListToShowElt.id = "HomeSweetHome";
                MenuListToShowElt.className += "active"
                var aIconHome = document.createElement("a");
                aIconHome.href="#";
                aIconHome.className="nav-link";

                var iconHome = document.createElement("i");
                iconHome.className = "material-icons";
                iconHome.textContent = "home";

                aIconHome.appendChild(iconHome);
                MenuListToShowElt.appendChild(aIconHome);
                listDivMenuResponsive.appendChild(MenuListToShowElt);
                break;
        }

        divMenuResponsive.appendChild(listDivMenuResponsive)
    }

    menuSquelette.appendChild(boutonResponsiveMenu);
    menuSquelette.appendChild(divMenuResponsive);

    document.getElementsByTagName('body')[0].appendChild(menuSquelette);

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

    for (var i = 0; i < expDivs.length; i++) {

        var echoExpMenuLink = document.createElement("a");
        echoExpMenuLink.href = "#" + expDivs[i].id;
        echoExpMenuLink.className = "dropdown-item";
        echoExpMenuLink.textContent = expDivs[i].id;

        expDropDown.appendChild(echoExpMenuLink)

    }
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        setTimeout(function () {
            createMenu()
        }, 200);
    }
};
