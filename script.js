// INSTAGRAM REEL SEARCH
console.clear();
let AskReelLnk = prompt("Enter Instagram Reel URL to Search.", "");
var ReelLnk = "";
//var ReelLnk = "DcalGMQoYw4";
//child.style.background = "linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045, #833ab4, #fd1d1d, #fcb045)";
var BorderColor = "#833ab4";
var Style = 'border: 3px solid #000; font-size: 16px; padding: 10px; font-weight: bold; color: #fff; ';
var StyleFound = Style + 'background: #00a12b;';
var StyleNotFound = Style + 'background: #f00;';
var StyleNotFound2 = Style + 'background: #ffa200; color: #000;';
var Dots = ".";
var PgScroll = '0';

if (AskReelLnk != null) {
    window.scrollTo({top: 0});
    var match = AskReelLnk.match(/\/(?:reel|reels)\/([a-zA-Z0-9-]+)/);
    console.log(match);
    if (match) {
        console.warn(match[1]);
        ReelLnk = match[1];
        // Clear All
        document.querySelectorAll("._ac7v").forEach(function (parent) {
            parent.querySelectorAll(":scope > div").forEach(function (child) {
                child.style.border = "0px dashed " + BorderColor;
            });
        });
        // Clear All
        FindReel();
    }
}else{
    alert("Please enter Instagram Reel URL.");
}

function FindReel(){
	// FIND REEL & MAKE A BODER AND SCROLL TO IT
	console.clear();
	var ReelFound = false;
	document.querySelectorAll("._ac7v").forEach(function (parent) {
		parent.querySelectorAll(":scope > div").forEach(function (child) {
			var lnk = child
				.querySelector("div > a")
				?.getAttribute("href");
			//console.log(lnk);
			if (!lnk) return;
			var result = lnk.match(new RegExp(ReelLnk, "gi"));
			if (result) {
				//console.warn(result);
				console.log("%c REEL FOUND!", StyleFound);
				ReelFound = true;
				child.style.border = "10px ridge " + BorderColor;
				child.style.borderRadius = "20px";                
				child.querySelector("div > a > div").style.borderRadius = "10px";
				window.scrollTo({
					top: (parent.getBoundingClientRect().top + window.scrollY) - 140,
					behavior: "smooth"
				});
			}
		});
	});
	if (ReelFound) {
        return;
    }
    console.log( "%c REEL NOT FOUND - SCROLLING FOR MORE" + Dots, StyleNotFound );
	Dots = Dots + ".";

    var CurrentScroll = document.documentElement.scrollHeight;
    //console.warn( PgScroll + "|" + CurrentScroll);
    if (PgScroll == CurrentScroll) {
        console.clear();
        console.log( "%c SORRY REEL NOT FOUND! ", StyleNotFound2 );
        return; // STOP FindReel completely
    }
    PgScroll = CurrentScroll;
    window.scrollTo({
        top: document.documentElement.scrollHeight
    });
    setTimeout(FindReel, 5000);
}
FindReel();
// INSTAGRAM REEL SEARCH