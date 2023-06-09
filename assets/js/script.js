// Generates date and time and appends it to the ID "currentDay"
var date = dayjs().format('dddd, MMMM D YYYY, h:mm:ss ');
var currentDateAndTime = document.getElementById('currentDay')
currentDateAndTime.textContent = date

// Function adds gets local storage as soon as the page is loaded
function init(){
    var hour9 = localStorage.getItem('hour-9');
    $('#hour-9').text(hour9);
    var hour10 = localStorage.getItem('hour-10');
    $('#hour-10').text(hour10);
    var hour11 = localStorage.getItem('hour-11');
    $('#hour-11').text(hour11);
    var hour12 = localStorage.getItem('hour-12');
    $('#hour-12').text(hour12);
    var hour13 = localStorage.getItem('hour-13');
    $('#hour-13').text(hour13);
    var hour14 = localStorage.getItem('hour-14');
    $('#hour-14').text(hour14);
    var hour15 = localStorage.getItem('hour-15');
    $('#hour-15').text(hour15);
    var hour16 = localStorage.getItem('hour-16');
    $('#hour-16').text(hour16);
    var hour17 = localStorage.getItem('hour-17');
    $('#hour-17').text(hour17);
}
// initial code loops through each block with the class 'time-block
$(function () {
    var currentHour = new Date().getHours();
$('.time-block').each(function () {
    var eventBlock = parseInt($(this).attr('data-hour'));
// conditional statement to compare the block from the given 'data-hour' with the current time and add css class 
    if (eventBlock < currentHour){
        $(this).addClass('past');
    }else if (eventBlock === currentHour){
        $(this).addClass('present');
    }else {
        $(this).addClass('future');
    }
})

});
// sets local storage on event of the save button being clicked
function saveEvent(event) {
    var textArea = event.target.parentElement.querySelector('.description');
    localStorage.setItem(textArea.id, textArea.value)
}
// event listener dor the save button
$('.btn').on('click', saveEvent)

// runs init function immediately when page loads
init();
