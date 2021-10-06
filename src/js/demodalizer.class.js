class Demodalizer {

	constructor(s) {
		this.selectors = s;
	}

	demodalize() {
		// hide all of the elements that match the above selectors
		document.querySelectorAll( this.selectors.join(",") ).forEach((el) => {
			var v = window.getComputedStyle( el ).getPropertyValue( "display" );
			el.dataset.demodalizerDisplay = v;
			el.style.setProperty( "display", "none", "important" );
		});

		// restore overflow settings to html and body
		document.querySelectorAll( "html, body" ).forEach((el) => {
			var v = window.getComputedStyle( el ).getPropertyValue( "overflow" );
			el.dataset.demodalizerOverflow = v;
			el.style.setProperty( "overflow", "auto", "important" );
		});

		// @todo: destructive. can't be remodalized
		document.onblur=function(){ return false; }
	}

	remodalize() {

		document.querySelectorAll( '[data-demodalizer-display]' ).forEach((el) => {
			var v = el.dataset.demodalizerDisplay;
			el.style.setProperty( "display", v, "important" );
		});

		document.querySelectorAll( '[data-demodalizer-overflow]' ).forEach((el) => {
			var v = el.dataset.demodalizerOverflow;
			el.style.setProperty( "overflow", v, "important" );
		});

	}

}

const modalSelectors = [
	"._5hn6",
	"div[id*='bottom-banner' i][class*='dcr']", // guardian pay wall overlay
	"div#onetrust-consent-sdk",
	"div[class*='alert-' i]",
	"div[class*='consent' i]",
	"div.cookie-consent",
	"div[role*='dialog' i]",
	"div[class*='flyout' i]",
	".fullscreen-overlay",
	"div[class*='intromercial' i]",
	"div.js-consent-banner",
// 	"div.modal",
// 	".modal-backdrop",
	"div[class*='modal' i]",
	"iframe[title*=modal] i",
	"div[data-test-id*='Modal' i]",
	"div[class*='paywall' i]",
	"div[id*='paywall' i]",
	"div[class*='_pendo' i]",
	"div[class*='popup' i]",
	"div[id*='popup' i]",
	"div[class*='pop-' i]",
	"div[class*='pop_' i]",
	"div[class*='popmake' i]",
	"#paywall",
	"div.tp-active"
];

const commonAdSelectors = [
	".advertisement",
	".adtop"
];

let myDemodalizer = new Demodalizer( [].concat( modalSelectors, commonAdSelectors ) );

myDemodalizer.demodalize();
