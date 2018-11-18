var x = document.body.innerHTML;
if ( x.match(/Tapatalk/g) ) { console.log("Forum Fixer: Tapatalk detected.  Removing."); 
	document.body.innerHTML = x.replace(/Sent from my .* using .*Tapatalk/ig,''); }

if ( location.href.match(/showthread/g) ) {
	// because the extension applies to all URLs, we have to filter
	// showthread.php is a vBulletin thing, so we're almost there

	console.log("Forum Fixer: showthread URL match, checking for vBulletin.");

	//simple test for vBulletin anywhere in the page, then strip sections
	if ( x.match(/vBulletin/g) ) {
		console.log("vBulletin found, stripping ignored user posts.");

	//strip "Sent from my $foo using Tapatalk" spam
	if ( x.match(/Tapatalk/g) ) { console.log("Tapatalk detected.  Removing."); }
	document.body.innerHTML = x.replace(/Sent from my .* using .*Tapatalk.*/ig,'');


	//strip ignored users' posts
	var ignored = document.getElementsByClassName("postbitignored");
	var i;
	var comments = ignored.length + " comment";
	if ( ignored.length>1 || ignored.length==0) { 
		comments = comments + "s";
		// eyecandy
	}

	console.log("Forum Fixer: removing " + comments + ".");

	for (i = ignored.length-1; i >=0; i--) {
		ignored[i].parentNode.removeChild(ignored[i]);
	}

	
	}	
}
else {
	console.log("Forum Fixer: no applicable URLs detected.");
}