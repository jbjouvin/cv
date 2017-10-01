function initPerson(person){
    var name = person.name;
    console.log(name)
}

function initSkills(skills){
    var skillsTitle = skills.title;
    console.log(skillsTitle);
}

function initTechSkills(techSkills){
    var titleTechSkills = techSkills.title;
    console.log(titleTechSkills);
}

// MAIN
// Lecture du fichier person.json
$.getJSON("person.json", function (personData) {
    console.log(personData);
    // console.log(Object.keys(data.work).length);
    // console.log(data.work[0].company);
    initPerson(personData.person);
    personData.skills.forEach(function(skills) {
        initSkills(skills)
    });
    initTechSkills(personData.techSkills);
});

