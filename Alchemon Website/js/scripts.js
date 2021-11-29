//PAGE LOAD FUNCTION//
//This function displays the loader screen until the full webpage is loaded//
document.onreadystatechange = function() {
	if (document.readyState !== "complete") {
		document.querySelector("body").style.visibility = "hidden";
		
		document.querySelector("#loader_image").style.visibility = "visible";
		document.querySelector("#loader_symbol").style.visibility = "visible";
		document.querySelector("#loader_text").style.visibility = "visible";

	} else {
		document.querySelector("#loader_image").style.display = "none";
		document.querySelector("#loader_symbol").style.display = "none";
		document.querySelector("#loader_text").style.display = "none";
		document.querySelector("body").style.visibility = "visible";
	}
};

//NAVAR
function navFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";}
	else {
		x.className = "topnav";
	}
}

//SONG AUDIO
//Hides play button after it is pressed
function hideButton() {
	var x = document.getElementById("audioSection");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

//Plays the song when button is clicked
function play() {
    var audio = document.getElementById("audio");
    audio.play();
	hideButton();
}

// These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")
    //here we state that if the click happens on the cancel button OR anywhere outside of the contact form AND the click does not happen on the contact button or any of the contact links then call the closeform function
    ){
        closeForm()
    }
}, false )
