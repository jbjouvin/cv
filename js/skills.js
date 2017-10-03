
function addSkills(skills, skillsId) {
    workDiv = document.getElementById(skillsId)

    // AJout skill
    skills.forEach(function (echoSkill) {
        // console.log(echoSkill);
        var skillElt = document.createElement("h6");
        skillElt.className = "skill badge badge-pill badge-info";
        skillElt.textContent = echoSkill;
        workDiv.appendChild(skillElt);
    })
}


function initSkills(skills) {
    var skillsTitle = skills.title;
    var skillsId = skills.id;
    var skillsItem = skills.skillItem;

    var skillsDiv = document.getElementById(skillsId);

    var skillsTitleElt = document.createElement("h4");
    skillsTitleElt.textContent = skillsTitle;
    skillsDiv.appendChild(skillsTitleElt);

    addSkills(skillsItem, skillsId);
}


// tech skill with progress bar
function addTechSkills(techSkills, techSkillsId) {

    workDiv = document.getElementById(techSkillsId)

    // AJout tech skill
    techSkills.forEach(function (echoTechSkill) {
        var techSkillElt = document.createElement("h6");
        techSkillElt.className = "progress";
        techSkillElt.textContent = echoTechSkill.names;
        techSkillElt.style = "width:" + echoTechSkill.level;

        workDiv.appendChild(techSkillElt);
    })
}


function initTechSkills(techSkills) {
    var techSkillsTitle = techSkills.title;
    var techSkillsId = techSkills.id;
    var techSkillsItem = techSkills.skillItem;

    var techSkillsDiv = document.getElementById(techSkillsId);

    var techSkillsTitleElt = document.createElement("h4");
    techSkillsTitleElt.textContent = techSkillsTitle;
    techSkillsDiv.appendChild(techSkillsTitleElt);

    addTechSkills(techSkillsItem, techSkillsId);
}

// MAIN
// Lecture du fichier person.json
$.getJSON("json/skills.json", function (skillsData) {
    //console.log(skillsData);
    // console.log(Object.keys(data.work).length);
    // console.log(data.work[0].company);
    skillsData.skills.forEach(function (skills) {
        initSkills(skills)
    });
    initTechSkills(skillsData.techSkills);
});

