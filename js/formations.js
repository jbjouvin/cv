function initFormation(formations) {
    formations.forEach(function (formation) {
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

        var titleFormationEltSchool = document.createElement("a");
        titleFormationEltSchool.textContent = " " + school + ',';
        titleFormationElt.appendChild(titleFormationEltSchool);

        var schoolLogoElt = document.createElement("img");
        schoolLogoElt.src = schoolLogo;
        schoolLogoElt.height = 60;
        schoolLogoElt.width = 60;
        schoolLogoElt.align = "right";

        titleFormationElt.appendChild(schoolLogoElt);

        var dateElt = document.createElement("span");
        dateElt.textContent = place + ", " + date;

        formationElt.appendChild(titleFormationElt);
        formationElt.appendChild(dateElt);

        workDiv.appendChild(formationElt);

    })
}


// MAIN

makeRequest = async () => {
    try {
        formationData = await($.getJSON("json/formations.json"));
        initFormation(formationData.formations)
    } catch (err) {
        console.log(err)
    }
}

makeRequest()