function addMission(mission) {
    var title = mission.title;
    var tasks = mission.tasks
    tasks.forEach(function (task) {
        // console.log(task);
    })
}


function addExp(work) {
    var title = work.title;
    var titleLong = work.titleLong;
    var company = work.company;
    var companyLink = work.companyLink;
    var place = work.place;
    var dateStart = work.dateStart;
    var dateEnd = work.dateEnd;
    var technicalEnv = work.technicalEnv;
    var mission = work.missions.forEach(function (mission) {
        addMission(mission);
    })

    // Create div
    var workDivElt = document.createElement("div");
    workDivElt.className = "col s12"

    var titleElt = document.createElement("h5");
    titleElt.textContent = title;

    workDivElt.appendChild(titleElt)

    document.getElementById("experiences").appendChild(workDivElt);

}

$.getJSON("xp.json", function (data) {
    // console.log(data);
    // console.log(Object.keys(data.work).length);
    // console.log(data.work[0].company);
    data.work.forEach(function (work) {
        addExp(work);
    });
});
