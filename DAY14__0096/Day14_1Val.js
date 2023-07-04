function displayVals(){
    var singleValues = $("#single").val();
    var multipleValues =$("#multiple").val();
    $("p").html("<b>Single:</b>"+ singleValues + "<b>Mutliple:</b>"+ multipleValues.join(", ") );
}

$("select").on("change",displayVals);
displayVals();