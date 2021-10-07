var modalSelectors = [
	"._5hn6",
	"div[id*='bottom-banner' i][class*='dcr']", // guardian pay wall overlay
	"div#onetrust-consent-sdk",
	"div[class*='alert-' i]",
	"div[class*='consent' i]",
	"div.cookie-consent",
	"div[role*='dialog' i]",
	"div[id*='engagement-container-' i]",
	"div[class*='flyout' i]",
	"div[class*='gdpr-' i]",
	".fullscreen-overlay",
	"div[class*='intromercial' i]",
	"div.js-consent-banner",
	"div[id*='layer-cover' i]",
// 	"div.modal",
// 	".modal-backdrop",
	"div[class*='modal' i]",
	"iframe[title*=modal] i",
	"div[data-test-id*='Modal' i]",
	"div[id*='overlay_' i]",
	"div[class*='overlay-' i]",
	"div[class*='paywall' i]",
	"div[id*='paywall' i]",
	"div[class*='_pendo' i]",
	"div[class*='popup' i]",
	"div[id*='popup' i]",
	"div[class*='pop-' i]",
	"div[class*='pop_' i]",
	"div[class*='popmake' i]",
	"#paywall",
	"div.tp-active",
	"ytd-popup-container"
];

var commonAdSelectors = [
	".advertisement",
	".adtop",
	"div[class$='_ad' i]"
];

// concatenate the selector arrays
var s = [].concat(modalSelectors, commonAdSelectors);

// hide all of the elements that match the above selectors
document.querySelectorAll( s.join(",") ).forEach((el) => {
	el.style.setProperty( "display", "none", "important" );
});

// restore overflow settings to html and body
document.querySelectorAll( "html, body" ).forEach((el) => {
	el.style.setProperty( "overflow", "auto", "important" );
});

document.onblur=function(){ return false; }
