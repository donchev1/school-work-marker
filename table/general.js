function showDialogBox(day,hour) {
    $(".invisible").css("display", "block");
    var dayDiv = $(".current-day");
    dayDiv.text(day);
    var hourDiv = $(".current-hour");
    hourDiv.text(hour);
    debugger;
    var domashnoZaToziChas = $("#" + hour+ "-" + day).text();
    $("#homeworkInput")[0].value = domashnoZaToziChas; 

    
}

function add()
{
    var domashno = $("#homeworkInput")[0].value; 
    var currentHour = $(".current-hour")[0].innerText;
    var currentday = $(".current-day")[0].innerText;
    var existingData = $("#" + currentHour+ "-" + currentday);
    if (existingData[0] == undefined)
    {
        var newDivWithData = $("<div id='" + currentHour + "-" + currentday +"'> </div>").text(domashno);
        $(".data-div").append(newDivWithData);
    }
    else 
    {
        
        existingData.text(domashno);
    }

    
    hideDialogBox();
}


function cancel()
{
    hideDialogBox();
}

function hideDialogBox() {
    $("#homeworkInput")[0].value = "";
    $(".invisible").css("display", "none")
}