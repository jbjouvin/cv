function initFormation(formations) {
    formations.forEach(function (formation){
        var formationName = formation.formationName;
        var school = formation.school;
        var schoolLogo = formation.schoolLogo;
        var place = formation.place;
        var date = formation.date;

        var workDiv = document.getElementById("formations");
        
        var formationElt = document.createElement("div");
        formationElt.className = "col-12 formation"

        var titleFormationElt = document.createElement("h5");
        var titleFormationEltStrong = document.createElement("b");
        titleFormationEltStrong.textContent = formationName;
        titleFormationElt.appendChild(titleFormationEltStrong);
        
        var titleFormationEltPlace = document.createElement("a");
        titleFormationEltPlace.textContent =  " à " + place ;

        titleFormationElt.appendChild(titleFormationEltPlace);

        var schoolLogoElt = document.createElement("img");
        schoolLogoElt.src = schoolLogo;
        schoolLogoElt.height = 60;
        schoolLogoElt.width = 60;
        schoolLogoElt.align = "right";

        titleFormationElt.appendChild(schoolLogoElt);

        var dateElt = document.createElement("span");
        dateElt.textContent = place + " " + date;

        formationElt.appendChild(titleFormationElt);
        formationElt.appendChild(dateElt);
        
        workDiv.appendChild(formationElt);

    })
}

// MAIN
// Lecture du fichier formations.json
$.getJSON("formations.json", function (formationData) {
    initFormation(formationData.formations)
});
