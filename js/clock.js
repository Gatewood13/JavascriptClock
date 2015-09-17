$(document).ready( function(){

	function displayTime(){

		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		var currentTime = new Date();
		//handle the date information and output to div
		var weekday = weekdayNames[currentTime.getDay()];
		var month = monthNames[currentTime.getMonth()];
		var day = currentTime.getDate();

		var date = document.getElementById('date');
		date.innerText = weekday + " " + month + " " + day;

		//handle the time
		var mediam = "AM"

		var hours = currentTime.getHours();
		if(hours > 12){
			hours = hours-12;
			mediam = "PM"
		}
		if (hours == 12){
			mediam = "PM"
		}
		if (hours === 0) {
    		hours = 12;    
		}

		var minutes = currentTime.getMinutes();
		if(minutes < 10){
			minutes = "0"+minutes;
		}

		var seconds = currentTime.getSeconds();
		if(seconds < 10){
			seconds = "0"+seconds;
		}
		//combine time into one var and output to clock id tag
		var clockDiv = document.getElementById('clock');
		clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " "+mediam;
	}

	setInterval(displayTime, 1000);
	displayTime();

});