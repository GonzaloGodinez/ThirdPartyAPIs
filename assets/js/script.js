// Use Day.js to get today's timestamp date below the title
var today = dayjs();
getDate = () => {
    $('#currentDay').text(dayjs().format("ddd, MMM D, YYYY h:mm A"));
}
// Reset time
setInterval(getDate, 1000)
var currenttime = today.hour()
var typeText;
var typeTime;
// Saving user input in local storage in the containing time-block
$(".saveBtn").click(function () {
    typeText = $(this).siblings(".description").val();
    typeTime = $(this).siblings(".hour").text();
    console.log(typeText);
    console.log(typeTime);
    localStorage.setItem(typeTime, typeText);
    console.log(localStorage);
});
// add class for present, pass and future event depending time block
for (i = 9; i < 18; i++) {
    var parent = $("#hour-" + i)
    if (currenttime === i) {
        parent.children("textarea").addClass("present")

    } else if (currenttime > i) {
        parent.children("textarea").addClass("past")
    } else {
        parent.children("textarea").addClass("future")
    }
}
$(".hour").each(function(){
    time = $(this).text();
    console.log(time)
    $(this).siblings(".description").val(localStorage.getItem(time));
})