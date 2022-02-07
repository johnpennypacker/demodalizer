var modalSelectors = [
	"._5hn6",
	".bx-base",
	".ch2>div[class^='ch2']",
	"#attentive_creative",
	"div[id*='bottom-banner' i][class*='dcr']", // guardian pay wall overlay
	"div#onetrust-consent-sdk",
	"div[aria-modal]",
	"div[class*='alert-' i]",
	"div[class*='consent' i]",
	"div.cookie-consent",
	"div[class*='cookie' i]",
	"div#cookie-banner",
	"div[role*='dialog' i]",
	"div[id*='engagement-container-' i]",
	"div[class*='evidon' i]",
	"div[class*='flyout' i]",
	"div.frel_overlay",
	"div[class*='gdpr-' i]",
	"div#getsitecontrol",
	"#HardsellOverlay",
	".fullscreen-overlay",
	"div[class*='intromercial' i]",
	"div.js-consent-banner",
	"div[id*='layer-cover' i]",
// 	"div.modal",
// 	".modal-backdrop",
	"div.mfp-bg",
	"div[class*='modal' i]",
	"iframe[title*=modal] i",
	"div[data-test-id*='Modal' i]",
	"div[id*='overlay_' i]",
	"div[class*='overlay-' i]", // fails here: https://www.architecturaldigest.com/story/vancouver-real-estate-native-reserve-land
// 	"div[class*='paywall' i]",
// 	"div[id*='paywall' i]",
	"div[class*='_pendo' i]",
	"div[id*='pico_prompt' i]",
	"div[class*='popover' i]",
	"div[class*='popup' i]",
	"div[id*='popup' i]",
	"div[class*='pop-' i]",
	"div[class*='pop_' i]",
	"div[class*='popmake' i]",
	"#paywall",
	"div.qc-cmp-cleanslate",
	"#truste-consent-track",
	"div[id^='sp_message_container_' i]",
	"div.tp-active",
	"div#usercentrics-root",
	"ytd-popup-container"
];

var commonAdSelectors = [
	".ad",
	".advertisement",
	".adtop",
	"div[class$='_ad' i]",
	".doctcom-ad"
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
	el.style.setProperty( "position", "relative", "important" );
});

document.onblur=function(){ return false; }
