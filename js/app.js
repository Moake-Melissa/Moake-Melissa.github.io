$(document).foundation();

var bgImageArray = ["aj-garcia-253576.jpg", "elk.jpeg", "matt-ragland-82514.jpg"],
base = "images/",
secs = 8;
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
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();