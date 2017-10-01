function initPerson(person){
    var name = person.name;
    var lastName = person.lastname;
    var linkedin = person.linkedin;
    var avatar = person.avatar;
    var mail = person.mail;
    var city = person.city;
    var jobTitle = person.jobTitle;

    //
    var personDiv = document.getElementById("adminPhoto");
    var avatarElt = document.createElement("img");
    avatarElt.className = "rounded-circle";
    avatarElt.align = "right";
    avatarElt.border = "75px";
    avatarElt.width = 175;
    avatarElt.height = 175;
    avatarElt.alt = name + " " +lastName;
    avatarElt.src = avatar;

    personDiv.appendChild(avatarElt);

    // icone identity
    var iconeElt = document.createElement("i");
    iconeElt.className = "material-icons";
    iconeElt.textContent = "perm_identity";
    personDiv.appendChild(iconeElt);
    
    //city
    var cityElt = document.createElement("a");
    cityElt.textContent = city;
    cityElt.href = "https://www.google.fr/maps/place/"+city;
    
    personDiv.appendChild(cityElt);

    // <i class="material-icons">perm_identity</i>
    // <a href="https://www.google.fr/maps/place/Paris">Paris, France</a>
    // <a href="mailto:jb.jouvin@gmail.com">jb.jouvin@gmail.com</a>
    // <a href="https://fr.linkedin.com/in/jean-baptiste-jouvin-35773258">Linkedin</a>
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

