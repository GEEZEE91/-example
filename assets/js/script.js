$('#currentDay').text(moment().format('dddd, MMM Do YYYY'));

var m = moment();

$(document).ready( function() {
    colorChange ();
    renderText();
});

function colorChange () {
    var currentTime = moment().hours();
// colour coding time events
    $(".input").each(function () {
        var scheduledTime = parseInt($(this).attr("id"));
        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}
// Button functionality, variables for on save button click, .val() is where the text goes
var eventText;
var eventTime;

$(".saveBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    eventTime = $(this).siblings(".hour").text();
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    colorChange ();
    renderText ();
    
});

$(".deleteBtn").click(function() {
        eventText = $(this).siblings(".input").val("");
        eventText = $(this).siblings(".input").val();
        eventTime = $(this).siblings(".hour").text();
        localStorage.setItem(eventTime, JSON.stringify(eventText));
  
    colorChange ();
    renderText ();

});

// Enter and Display Events
    function renderText () {   
        var saveEventText8 = JSON.parse(localStorage.getItem("8 am"));
        $("#8").val("");
        $("#8").val(saveEventText8);
    
        var saveEventText9 = JSON.parse(localStorage.getItem("9 am"));
        $("#9").val("");
        $("#9").val(saveEventText9);
        
        var saveEventText10 = JSON.parse(localStorage.getItem("10 am"));
        $("#10").val("");
        $("#10").val(saveEventText10);
        
        var saveEventText11 = JSON.parse(localStorage.getItem("11 am"));
        $("#11").val("");
        $("#11").val(saveEventText11);
        
        var saveEventText12 = JSON.parse(localStorage.getItem("12 pm"));
        $("#12").val("");
        $("#12").val(saveEventText12);
        
        var saveEventText1 = JSON.parse(localStorage.getItem("1 pm"));
        $("#13").val("");
        $("#13").val(saveEventText1);
    
        var saveEventText2 = JSON.parse(localStorage.getItem("2 pm"));
        $("#14").val("");
        $("#14").val(saveEventText2);
    
        var saveEventText3 = JSON.parse(localStorage.getItem("3 pm"));
        $("#15").val("");
        $("#15").val(saveEventText3);
    
        var saveEventText4 = JSON.parse(localStorage.getItem("4 pm"));
        $("#16").val("");
        $("#16").val(saveEventText4);
    
        var saveEventText5 = JSON.parse(localStorage.getItem("5 pm"));
        $("#17").val("");
        $("#17").val(saveEventText5);
    
        
    
    };