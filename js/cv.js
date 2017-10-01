function addTechnicalEnv(technicalEnv, title){
    var techItem = technicalEnv;
    workDiv = document.getElementById(title)
    techItem.forEach(function (item) {
        // console.log(task);
    })
}


function addMission(mission, title) {
    var missionTitle = mission.title;
    var tasks = mission.tasks;
    console.log(title)
    // Ajout titre mission
    workDiv = document.getElementById(title)
    console.log(workDiv);
    tasks.forEach(function (task) {
        // console.log(task);
    })
}


function addExp(work) {
    var title = work.title;
    var titleLong = work.titleLong;
    var company = work.company;
    var companyLink = work.companyLink;
    var companyLogo = work.companyLogo;
    var place = work.place;
    var dateStart = work.dateStart;
    var dateEnd = work.dateEnd;


    // Create div
    var workDivElt = document.createElement("div");
    workDivElt.className = "col s12";
    workDivElt.id = title;

    // Title + company + link + img
    var titleLongElt = document.createElement("h5", "strong");
    titleLongElt.textContent = titleLong + " chez ";

    var companyLinkElt = document.createElement("a")
    companyLinkElt.textContent = company;
    companyLinkElt.href = companyLink;
    titleLongElt.appendChild(companyLinkElt);

    var companyLogoElt = document.createElement("img");
    companyLogoElt.src = companyLogo;
    companyLogoElt.height = 90;
    companyLogoElt.width = 90;
    companyLogoElt.align = "right";
    titleLongElt.appendChild(companyLogoElt);
    workDivElt.appendChild(titleLongElt);

    // lieu
    var placeElt = document.createElement("span");
    placeElt.textContent = place + ": ";
    placeElt.className = "lieu";
    workDivElt.appendChild(placeElt);

    // date
    var dateElt = document.createElement("span");
    dateElt.textContent = dateStart + " à " + dateEnd;
    dateElt.className = "dates";
    workDivElt.appendChild(dateElt);

    // Ajout Div
    document.getElementById("experiences").appendChild(workDivElt);


    // ajout missions
    var mission = work.missions.forEach(function (mission, title) {
        addMission(mission, work.title);
    })

    //Ajout technicalEnv
    var technicalEnv = work.technicalEnv.forEach(function (technicalEnv, title) {
        addTechnicalEnv(technicalEnv, work.title);
    })


}


// Lecture du fichier xp.json
$.getJSON("xp.json", function (data) {
    // console.log(data);
    // console.log(Object.keys(data.work).length);
    // console.log(data.work[0].company);
    data.work.forEach(function (work) {
        addExp(work);
    });
});
