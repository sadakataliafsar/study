document.addEventListener('DOMContentLoaded',function () {
	var checkpageclick = document.getElementById("checkpage");
	checkpageclick.addEventListener("click",function(){
		alert("hi test");
	});
});

/*
Open a new tab, and load "my-page.html" into it.
*/
// function openMyPage() {
//   console.log("injecting");
//    browser.tabs.create({
//      "url": "/index.html"
//    });
// }
/*
Add openMyPage() as a listener to clicks on the browser action.
*/
// browser.browserAction.onClicked.addListener(openMyPage);