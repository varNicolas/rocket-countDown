function playCountDown() {
  let date = new Date()

  let day = document.getElementById('day')
  let hours = document.getElementById('hours')
  let minutes = document.getElementById('minutes')
  let seconds = document.getElementById('seconds')

  let dayToday = date.getDate();
  let hoursNow = date.getHours();
  let minutesNow = date.getMinutes();
  let secondsNow = date.getSeconds()


   if(dayToday < 10) dayToday = "0" + dayToday;
   if(hoursNow < 10) hoursNow = "0" + hoursNow;
   if(minutesNow < 10) minutesNow = "0" + minutesNow;
   if(secondsNow < 10) secondsNow = "0" + secondsNow;

   
  day.innerHTML = dayToday;
  hours.innerHTML = hoursNow;
  minutes.innerHTML = minutesNow;
  seconds.innerHTML = secondsNow;

  playTimer()
}
let interval
function playTimer(){
  interval = setInterval(playCountDown, 1000)
}