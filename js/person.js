function initPerson(person) {
    var name = person.name;
    var lastName = person.lastname;
    var linkedin = person.linkedin;
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

    // icone identity
    var adminDiv = document.getElementById("admin");

    var iconeElt = document.createElement("i");
    iconeElt.className = "material-icons";
    iconeElt.textContent = "perm_identity";
    adminDiv.appendChild(iconeElt);
    adminDiv.appendChild(document.createElement("br"));

    //city
    var cityElt = document.createElement("a");
    cityElt.textContent = city + ", " + country;
    cityElt.href = "https://www.google.fr/maps/place/" + city;

    adminDiv.appendChild(cityElt);
    adminDiv.appendChild(document.createElement("br"));

    //Linkedin
    var linkedinElt = document.createElement("a");
    linkedinElt.textContent = "linkedin";
    linkedinElt.href = linkedin;

    adminDiv.appendChild(linkedinElt);
    adminDiv.appendChild(document.createElement("br"));

    //mail
    var mailElt = document.createElement("a");
    mailElt.textContent = mail;
    mailElt.href = "mailto:" + mail;

    adminDiv.appendChild(mailElt);

}


// MAIN
// Lecture du fichier person.json
$.getJSON("json/person.json", function (personData) {
    //console.log(personData);
    // console.log(Object.keys(data.work).length);
    // console.log(data.work[0].company);
    initPerson(personData.person);
});

