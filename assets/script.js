/* Each input value is saved individually */
document.getElementById("saveText").value = getSavedValue("saveText"); 
document.getElementById("saveText2").value = getSavedValue("saveText2");
document.getElementById("saveText3").value = getSavedValue("saveText3");
document.getElementById("saveText4").value = getSavedValue("saveText4");
document.getElementById("saveText5").value = getSavedValue("saveText5");
document.getElementById("saveText6").value = getSavedValue("saveText6");
document.getElementById("saveText7").value = getSavedValue("saveText7");
document.getElementById("saveText8").value = getSavedValue("saveText8");
document.getElementById("saveText9").value = getSavedValue("saveText9");
document.getElementById("saveText10").value = getSavedValue("saveText10");
document.getElementById("saveText11").value = getSavedValue("saveText11"); 
document.getElementById("saveText12").value = getSavedValue("saveText12");

/* Date and clock functions */
function showTime() {
 var today = new Date();
 var hr = today.getHours();
 var min = today.getMinutes();

 ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>"
 hr = (hr == 0) ? 12 : hr;
 hr = (hr > 12) ? hr - 12 : hr;

 /* Hours */
 hr = checkTime(hr);
 /* Minutes */
 min = checkTime(min);
 document.getElementById('clock').innerHTML = hr + ":" + min + " " + ap;

 /* Months */
 var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 /* Days */
 var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 var curWeekDay = days[today.getDay()];
 var curDay = today.getDate();
 var curMonth = months[today.getMonth()];
 var curYear = today.getFullYear();
 var date = curWeekDay+", "+curMonth+" "+curDay+" "+curYear;
 document.getElementById('date').innerHTML = date;

}
showTime(); 

function checkTime(i) {
 if (i < 10) {
  i = "0" + i;
 }
 return i;
};


moment(Date);
$("#curentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));
var currentTime = moment();
currentTime = currentTime.startOf('hour');
var beforeTime = moment().startOf('day').add(7, 'hours');

/* 7am time block */
var time7am = beforeTime.add(0, 'h');
time7am = time7am.format('hh:mm A');
$('.block1').text(time7am);

/* 8am time block */
var time8am = beforeTime.add(1, 'h');
time8am = time8am.format('hh:mm A');
$('.block2').text(time8am);

/* 9am time block */
var time9am = beforeTime.add(1, 'h');
time9am = time9am.format('hh:mm A');
$('.block3').text(time9am);

/* 10am time block */
var time10am = beforeTime.add(1, 'h');
time10am = time10am.format('hh:mm A');
$('.block4').text(time10am);

/* 11am time block */
var time11am = beforeTime.add(1, 'h');
time11am = time11am.format('hh:mm A');
$('.block5').text(time11am);

/* 12pm time block */
var time12pm = beforeTime.add(1, 'h');
time12pm = time12pm.format('hh:mm A');
$('.block6').text(time12pm);

/* 1pm time block */
var time1pm = beforeTime.add(1, 'h');
time1pm = time1pm.format('hh:mm A');
$('.block7').text(time1pm);

/* 2pm time block */
var time2pm = beforeTime.add(1, 'h');
time2pm = time2pm.format('hh:mm A');
$('.block8').text(time2pm);

/* 3pm time block */
var time3pm = beforeTime.add(1, 'h');
time3pm = time3pm.format('hh:mm A');
$('.block9').text(time3pm);

/* 4pm time block */
var time4pm = beforeTime.add(1, 'h');
time4pm = time4pm.format('hh:mm A');
$('.block10').text(time4pm);

/* 5pm time block */
var time5pm = beforeTime.add(1, 'h');
time5pm = time5pm.format('hh:mm A');
$('.block11').text(time5pm);

/* 6pm time block */
var time6pm = beforeTime.add(1, 'h');
time6pm = time6pm.format('hh:mm A');
$('.block12').text(time6pm);

/* function for time block colors, past, future, and present 
past - grey
future - green 
present - red */
function theTime() {
 time7am = moment().startOf('day').add(7, 'hours');
 currentTime = currentTime.startOf('hour');
 /* if time is after 7am, .past is applied to block */
 if (currentTime.isAfter(time7am)) {
  $('.form7am').addClass('past');
 }
 /* if time is before 7am, .future is applied to block */
 else if (currentTime.isBefore(time7am)) {
  $('.form7am').addClass('future');
 }
 /* if time is the current time, .present is applied to block */
 else if (currentTime.isSame(time7am)) {
  $('.form7am').addClass('present');
 };

 time8am = moment().startOf('day').add(8, 'hours');
 /* if time is after 8am, .past is applied to block */
 if (currentTime.isAfter(time8am)) {
  $('.form8am').addClass('past');
 }
  /* if time is before 8am, .future is applied to block */
 else if (currentTime.isBefore(time8am)) {
  $('.form8am').addClass('future'); 
 }
  /* if time is the current time, .present is applied to block */
 else if (currentTime.isSame(time8am)) {
  $('.form8am').addClass('present');
 };

 time9am = moment().startOf('day').add(9, 'hours');
  /* if time is after 9am, .past is applied to block */
 if (currentTime.isAfter(time9am)) {
  $('.form9am').addClass('past');
 }
  /* if time is before 9am, .future is applied to block */
 else if (currentTime.isBefore(time9am)) {
  $('.form9am').addClass('future'); 
 }
  /* if time is the current time, .present is applied to block */
 else if (currentTime.isSame(time9am)) {
  $('.form9am').addClass('present');
 };

 time10am = moment().startOf('day').add(10, 'hours');
  /* if time is after 10am, .past is applied to block */
 if (currentTime.isAfter(time10am)) {
  $('.form10am').addClass('past');
 }
  /* if time is before 10am, .future is applied to block */
 else if (currentTime.isBefore(time10am)) {
  $('.form10am').addClass('future'); 
 }
  /* if time is the current time, .present is applied to block */
 else if (currentTime.isSame(time10am)) {
  $('.form10am').addClass('present');
 };

 time11am = moment().startOf('day').add(11, 'hours');
  /* if time is after 11am, .past is applied to block */
 if (currentTime.isAfter(time11am)) {
  $('.form11am').addClass('past');
 }
  /* if time is before 11am, .future is applied to block */
 else if (currentTime.isBefore(time11am)) {
  $('.form11am').addClass('future'); 
 }
  /* if time is the current time, .present is applied to block */
 else if (currentTime.isSame(time11am)) {
  $('.form11am').addClass('present');
 };

 time12pm = moment().startOf('day').add(12, 'hours');
  /* if time is after 12pm, .past is applied to block */
 if (currentTime.isAfter(time12pm)) {
  $('.form12pm').addClass('past');
 }
  /* if time is before 12pm, .future is applied to block */
 else if (currentTime.isBefore(time12pm)) {
  $('.form12pm').addClass('future'); 
 }
  /* if time is the current time, .present is applied to block */
 else if (currentTime.isSame(time12pm)) {
  $('.form12pm').addClass('present');
 };

 time1pm = moment().startOf('day').add(13, 'hours');
  /* if time is after 1pm, .past is applied to block */
 if (currentTime.isAfter(time1pm)) {
  $('.form1pm').addClass('past');
 }
  /* if time is before 1pm, .future is applied to block */
 else if (currentTime.isBefore(time1pm)) {
  $('.form1pm').addClass('future'); 
 }
  /* if time is the current time, .present is applied to block */
 else if (currentTime.isSame(time1pm)) {
  $('.form1pm').addClass('present');
 };

 time2pm = moment().startOf('day').add(14, 'hours');
  /* if time is after 2pm, .past is applied to block */
 if (currentTime.isAfter(time2pm)) {
  $('.form2pm').addClass('past');
 }
  /* if time is before 2pm, .future is applied to block */
 else if (currentTime.isBefore(time2pm)) {
  $('.form2pm').addClass('future'); 
 }
  /* if time is the current time, .present is applied to block */
 else if (currentTime.isSame(time2pm)) {
  $('.form2pm').addClass('present');
 };

 time3pm = moment().startOf('day').add(15, 'hours');
  /* if time is after 3pm, .past is applied to block */
 if (currentTime.isAfter(time3pm)) {
  $('.form3pm').addClass('past');
 }
  /* if time is before 3pm, .future is applied to block */
 else if (currentTime.isBefore(time3pm)) {
  $('.form3pm').add
  Class('future'); 
 }
  /* if time is the current time, .present is applied to block */
 else if (currentTime.isSame(time3pm)) {
  $('.form3pm').addClass('present');
 };

 time4pm = moment().startOf('day').add(16, 'hours');
  /* if time is after 4pm, .past is applied to block */
 if (currentTime.isAfter(time4pm)) {
  $('.form4pm').addClass('past');
 }
  /* if time is before 4pm, .future is applied to block */
 else if (currentTime.isBefore(time4pm)) {
  $('.form4pm').addClass('future'); 
 }
  /* if time is the current time, .present is applied to block */
 else if (currentTime.isSame(time4pm)) {
  $('.form4pm').addClass('present');
 };

 time5pm = moment().startOf('day').add(17, 'hours');
  /* if time is after 5pm, .past is applied to block */
 if (currentTime.isAfter(time5pm)) {
  $('.form5pm').addClass('past');
 }
  /* if time is before 5pm, .future is applied to block */
 else if (currentTime.isBefore(time5pm)) {
  $('.form5pm').addClass('future'); 
 }
  /* if time is the current time, .present is applied to block */
 else if (currentTime.isSame(time5pm)) {
  $('.form5pm').addClass('present');
 };
 
 time6pm = moment().startOf('day').add(18, 'hours');
  /* if time is after 6pm, .past is applied to block */
 if (currentTime.isAfter(time6pm)) {
  $('.form6pm').addClass('past');   
 }
  /* if time is before 6pm, .future is applied to block */
 else if (currentTime.isBefore(time6pm)) {
  $('.form6pm').addClass('future');
 }
  /* if time is the current time, .present is applied to block */
 else if (currentTime.isSame(time6pm)) {
  $('.form6pm').addClass('present');
 };
}
theTime();

/* local storage for theTime function */
var x = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
for (var i = 0; i < x.length; i++) {
 var dataHour = localStorage.getItem(x[i]);
 $(".form" + x[i]).val(dataHour);
}

/* function event to save the input into */
function saveValue(event){
    var id = event.id; 
    var val = event.value; 
    localStorage.setItem(id, val);
}
function getSavedValue (value){
    if (!localStorage.getItem(value)) {
        return ""; 
    }
    return localStorage.getItem(value);
}

/* When saved button is click, the console shows that it saved */
$(".saveBtn").click(function(event) {
 event.preventDefault();
 var newValue = $(this).siblings(".form-control").val();
 console.log("It saved!");
 var listItem = $(this).parent().data("hour");

 localStorage.setItem(listItem, newValue);
})

