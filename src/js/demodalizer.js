var modalSelectors = [
	"._5hn6",
	"div#onetrust-consent-sdk",
	"div[class*='intromercial' i]",
	"div[class*='modal' i]",
// 	"div.modal",
// 	".modal-backdrop",
	"div[data-test-id*='Modal' i]",
	"div[class*='flyout' i]",
	"div[class*='paywall' i]",
	"div[class*='_pendo' i]",
	"div[class*='popup' i]",
	"div[class*='pop-up' i]",
	"div[class*='pop_up' i]",
	"div[class*='popmake' i]",
	"div[role*='dialog' i]",
	"div.tp-active",
	"div.js-consent-banner",
	"div.cookie-consent",
	"iframe[title*=modal] i",
	"#fortress-paywall-container-root",
	"#paywall"
];

var commonAdSelectors = [
	".advertisement",
	".adtop"
];

// concatenate the selector arrays
var s = [].concat(modalSelectors, commonAdSelectors);

// hide all of the elements that match the above selectors
document.querySelectorAll( s.join(",") ).forEach((el) => {
	el.style.setProperty( "display", "none", "important" );
});

// restore overflow settings to html and body
document.querySelectorAll( "html,body" ).forEach((el) => {
	el.style.setProperty( "overflow", "auto", "important" );
});

document.onblur=function(){ return false; }
