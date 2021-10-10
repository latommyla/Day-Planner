var saveInfo = document.querySelector(".saveinfo")

/* Sourced from GeeksforGeeks
 Digital clock for top of page for inputting */
function showTime() {
 let time = new Date();
 let hour = time.getHours();
 let min = time.getMinutes();
 let sec = time.getSeconds();
 am_pm = "AM";

 if (hour > 12) {
  hour-= 12;
  am_pm = "PM";
 }
 if (hour == 0) {
  hr = 12;
  am_pm = "AM";
 }

 hour = hour < 10 ? "0" + hour : hour;
 min = min < 10 ? "0" + min : min;

 let currentTime = hour + ":"
  + min + ":" + sec + am_pm;

 document.getElementById("clock")
  .innerHTML = currentTime;
}
showTime();



$(".saveInfo").click(function(event) {
 event.preventDefault();
 var newValue = $(this).siblings(".form-control").val();
 console.log("It saved!");
 var saveItem = $(this).parent().date("hour");

 localStorage.setItem(saveItem, newValue);
})