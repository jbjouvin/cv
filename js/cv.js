$.getJSON("xp.json", function (data) {
    console.log(data);
    console.log( Object.keys( data.work ).length ) ;
    console.log(data.work[0].company);
});

