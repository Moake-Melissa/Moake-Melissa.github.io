$(document).foundation();


//Example taken from https://codepen.io/dudleystorey/pen/qEoKzZ
var bgImageArray = ["aj-garcia-253576.jpg", "elk.jpeg", "matt-ragland-82514.jpg"],
base = "images/",
secs = 4;
bgImageArray.forEach(function(img){
    new Image().src = base + img; 
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){ 
			document.getElementById("gallery").style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
			document.getElementById("gallery").style.backgroundSize ="cover";
		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
		}, (secs * 1000) * i);	
	}
}
backgroundSequence();
//End of Example

function menuTile(){
    if (document.getElementById("mobileMenu").style.display !== "none"){
        $(".top-bar .menu").addClass("is-visible");
        $(".top-bar .menu .button").css("margin-right", "0px");
        $(".top-bar .menu .button").css("width", "inherit");
    }
    else if (document.getElementById("mobileMenu").style.display === "none"){
        $(".top-bar .menu").removeClass("is-visible");
        $(".top-bar .menu .button").css("margin-right", "30px");
        $(".top-bar .menu .button").css("width", "170px");
    }
}

menuTile();


$(window).resize(function(){ 
    menuTile();
});