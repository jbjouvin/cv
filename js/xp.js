function addTechnicalEnv(technicalEnv, title) {
  workDiv = document.getElementById(title);
  var techEnv = document.createElement("h5");
  techEnv.textContent = "Environnement Technique";
  techEnv.className = "tech-env-title";
  workDiv.appendChild(techEnv);

  technicalEnv.forEach(function(item) {
    var echoTechItem = document.createElement("h6");
    echoTechItem.className = "badge badge-pill badge-info technical-pastille";
    echoTechItem.textContent = item;
    workDiv.appendChild(echoTechItem);
  });
}

function addMission(mission, title) {
  var missionTitle = mission.title;
  var tasks = mission.tasks;
  workDiv = document.getElementById(title);

  // Ajout titre Mission
  var titreMission = document.createElement("h5");
  titreMission.textContent = missionTitle;
  titreMission.className = "mission-title";
  workDiv.appendChild(titreMission);

  // AJout taches mission
  tasks.forEach(function(task) {
    var echoTask = document.createElement("li");
    echoTask.className = "mission-task";
    echoTask.textContent = task;
    // catch mini-task
    if (typeof task === "object") {
      var miniTaskUl = document.createElement("ol");
      miniTasks = task.miniTasks;
      miniTasks.forEach(function(miniTask) {
        var echoMiniTask = document.createElement("li");
        echoMiniTask.className = "mini-task";
        echoMiniTask.textContent = miniTask;
        miniTaskUl.appendChild(echoMiniTask);
      });
      workDiv.appendChild(miniTaskUl);
    } else {
      workDiv.appendChild(echoTask);
    }
  });
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
  workDivElt.className = "col-s12";
  workDivElt.id = title;

  // Title + company + link + img
  var titleLongElt = document.createElement("h5", "strong");
  titleLongElt.className = "titre-long";
  titleLongElt.textContent = titleLong + " chez ";

  var companyLinkElt = document.createElement("a");
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
  var mission = work.missions.forEach(function(mission, title) {
    addMission(mission, work.title);
  });

  //Ajout technicalEnv
  addTechnicalEnv(work.technicalEnv, work.title);
  var hrElt = document.createElement("hr");
  hrElt.className = "d-print-none";
  workDivElt.appendChild(hrElt);
}

// MAIN

makeRequest = async () => {
  try {
    xpData = await $.getJSON("json/xp.json");
    xpData.xp.forEach(function(work) {
      addExp(work);
    });
  } catch (err) {
    console.log(err);
  }
};

makeRequest();
