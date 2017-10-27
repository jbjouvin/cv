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
        var techSkillEltDiv = document.createElement("div");
        techSkillEltDiv.className = "progress";

        var techSkillElt = document.createElement("progress-bar");
        techSkillElt.className = "progress-bar" +  " " + "bg-" + echoTechSkill.levelColor;
        techSkillElt.setAttribute("role","progressbar");
        techSkillElt.textContent = echoTechSkill.names;
        techSkillElt.style = "width:" + echoTechSkill.level;
        
        techSkillEltDiv.appendChild(techSkillElt)
        
        workDiv.appendChild(techSkillEltDiv);
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


makeRequest = async () => {
    try {
        skillsData = await($.getJSON("json/skills.json"));
        skillsData.skills.forEach(function (skills) {
            initSkills(skills)
        });
        initTechSkills(skillsData.techSkills);
    } catch (err) {
        console.log(err)
    }
}

makeRequest()