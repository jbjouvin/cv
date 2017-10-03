function initLoisirs(loisirs) {
    loisirs.forEach(function (loisir) {
        type = loisir.type;
        list = loisir.list;
        console.log(type);
        console.log(list);

        var workDiv = document.getElementById("loisirs");

        var loisirElt = document.createElement("h5");
        loisirElt.className = "loisir"

        var loisirType = document.createElement("b");
        
        loisirType.textContent = type + ":";

        var loisirList = document.createElement("ul");
        loisirList.className = "loisir-list"
        list.forEach(function (item){
            console.log(item);
            var itemElt = document.createElement("li")
            itemElt.textContent = item;
            itemElt.className = "loisir-item"
            loisirList.appendChild(itemElt);
        })

        loisirElt.appendChild(loisirType);
        loisirElt.appendChild(loisirList);

        workDiv.appendChild(loisirElt);

    }
    )
};

// MAIN
// Lecture du fichier loisirs.json
$.getJSON("loisirs.json", function (loisirsData) {
    initLoisirs(loisirsData.loisirs);
});