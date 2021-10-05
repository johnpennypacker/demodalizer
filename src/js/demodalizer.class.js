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
	"div#onetrust-consent-sdk",
	"div[class*='intromercial' i]",
	"div[class*='modal' i]",
// 	"div.modal",
// 	".modal-backdrop",
	"div[data-test-id*='Modal' i]",
	"div[class*='flyout' i]",
	"div[id*='bottom-banner' i][class*='dcr']", // guardian pay wall overlay
	"div[class*='paywall' i]",
	"div[class*='_pendo' i]",
	"div[class*='popup' i]",
	"div[id*='popup' i]",
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

const commonAdSelectors = [
	".advertisement",
	".adtop"
];

let myDemodalizer = new Demodalizer( [].concat( modalSelectors, commonAdSelectors ) );

myDemodalizer.demodalize();
