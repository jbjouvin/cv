function initPerson(person) {
    var name = person.name;
    var lastName = person.lastname;
    var linkedin = person.linkedin;
    var github = person.github;
    var gitlab = person.gitlab;
    var avatar = person.avatar;
    var mail = person.mail;
    var city = person.city;
    var country = person.country;
    var jobTitle = person.jobTitle;

    // Title
    document.title = "CV " + name + " " + lastName;

    // div nameJob
    var nameJobDiv = document.getElementById("nameJob");

    var nameLastname = document.createElement("h3");
    nameLastname.textContent = name + lastName;

    var nameJobTitle = document.createElement("h4");
    nameJobTitle.textContent = jobTitle;

    nameJobDiv.appendChild(nameLastname);
    nameJobDiv.appendChild(nameJobTitle);

    // div adminPhoto
    var photoDiv = document.getElementById("photo");

    // avatar
    var avatarElt = document.createElement("img");
    avatarElt.className = "rounded-circle";
    avatarElt.align = "right";
    avatarElt.border = "75px";
    avatarElt.width = 175;
    avatarElt.height = 175;
    avatarElt.alt = name + " " + lastName;
    avatarElt.src = avatar;

    photoDiv.appendChild(avatarElt);

    var adminDiv = document.getElementById("admin");

    //city 
    // fa fa-map-marker
    var iconeCityElt = document.createElement("i");
    iconeCityElt.className = "fa fa-map-marker";
    adminDiv.appendChild(iconeCityElt);
    var cityElt = document.createElement("a");
    cityElt.textContent = city + ", " + country;
    cityElt.href = "https://www.google.fr/maps/place/" + city;

    adminDiv.appendChild(cityElt);
    adminDiv.appendChild(document.createElement("br"));

    //Linkedin
    var iconeLinkedinElt = document.createElement("i");
    iconeLinkedinElt.className = "fa fa-linkedin-square";
    adminDiv.appendChild(iconeLinkedinElt);
    var linkedinElt = document.createElement("a");
    linkedinElt.textContent = "linkedin";
    linkedinElt.href = linkedin;
    adminDiv.appendChild(linkedinElt);
    adminDiv.appendChild(document.createElement("br"));

    //mail
    // fa fa-envelope-o
    var iconeMailElt = document.createElement("i");
    iconeMailElt.className = "fa fa-envelope-o";
    adminDiv.appendChild(iconeMailElt);
    var mailElt = document.createElement("a");
    mailElt.textContent = mail;
    mailElt.href = "mailto:" + mail;
    adminDiv.appendChild(mailElt);
    adminDiv.appendChild(document.createElement("br"));

    // Github
    // fa fa-github
    var iconeGithubElt = document.createElement("i");
    iconeGithubElt.className = "fa fa-github";
    adminDiv.appendChild(iconeGithubElt);
    var githubElt = document.createElement("a");
    githubElt.textContent = "github";
    githubElt.href = github;
    adminDiv.appendChild(githubElt);
    adminDiv.appendChild(document.createElement("br"));

    // fork this cv template:
    

    // GitLab
    // fa fa-gitlab
    var iconeGitlabElt = document.createElement("i");
    iconeGitlabElt.className = "fa fa-gitlab";
    adminDiv.appendChild(iconeGitlabElt);
    var gitlabElt = document.createElement("a");
    gitlabElt.textContent = "gitlab";
    gitlabElt.href = gitlab;
    adminDiv.appendChild(gitlabElt);
    adminDiv.appendChild(document.createElement("br"));

    

}


// MAIN
// Lecture du fichier person.json
$.getJSON("json/person.json", function (personData) {
    //console.log(personData);
    // console.log(Object.keys(data.work).length);
    // console.log(data.work[0].company);
    initPerson(personData.person);
});

