$('#currentDay').text(moment().format('dddd, MMM Do YYYY'));

var saveBtn = $(".saveBtn");


//color change based on hour of day
function colorChange() {
    var hour = moment().hours();
    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));
        console.log(this); //each time-block
        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};


// Button , save variables in local storage on click
$(".saveBtn").click(function() {
    var time = $(this).siblings(".hour").text();
    var input = $(this).siblings(".input").val();
    localStorage.setItem(time, JSON.stringify(input));
        
});


//show text entered and saved in local storage on page
function renderText() {
    $(".hour").each(function() {
        let currHour = $(this).text();
        let currInput = localStorage.getItem(currHour);

        console.log(this);
        console.log(currHour);

        if(currInput !== null) {
            $(this).siblings(".input").val(currInput);
        }
    });
}

 // Button function to clear local storage and clear contents
 $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

    
  colorChange()
  renderText()
// Enter and Display Events
